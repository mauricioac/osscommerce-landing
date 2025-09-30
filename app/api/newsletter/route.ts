import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email, source, groups } = await request.json()

    // Basic email validation
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email address is required' },
        { status: 400 }
      )
    }

    const apiKey = process.env.NEWSLETTER_API_KEY
    const generalGroupId = process.env.NEWSLETTER_GENERAL_GROUP_ID

    if (!apiKey) {
      console.error('NEWSLETTER_API_KEY not configured')
      return NextResponse.json(
        { error: 'Newsletter service not configured' },
        { status: 500 }
      )
    }

    // Build groups array - always include general group
    const groupIds: string[] = []
    if (generalGroupId) {
      groupIds.push(generalGroupId)
    }

    // Add source-specific groups if provided
    if (groups && Array.isArray(groups)) {
      groupIds.push(...groups)
    }

    // Call MailerLite API
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email,
        groups: groupIds.length > 0 ? groupIds : undefined,
        fields: {
          source: source || 'website'
        }
      })
    })

    const data = await response.json()

    if (!response.ok) {
      console.error('MailerLite API error:', data)
      return NextResponse.json(
        { error: data.message || 'Failed to subscribe. Please try again.' },
        { status: response.status }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to newsletter!',
      email
    })

  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}