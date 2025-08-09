import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email, source, timestamp } = await request.json()

    // Basic email validation
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email address is required' },
        { status: 400 }
      )
    }

    // This is a fallback endpoint for local development
    // In production, you should replace this with your actual newsletter service
    console.log('Newsletter subscription request:', {
      email,
      source: source || 'website',
      timestamp: timestamp || new Date().toISOString(),
      userAgent: request.headers.get('user-agent'),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip')
    })

    // Simulate a delay for realistic testing
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Simulate occasional errors for testing
    if (email.includes('error@')) {
      return NextResponse.json(
        { error: 'Subscription failed. Please try again.' },
        { status: 500 }
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