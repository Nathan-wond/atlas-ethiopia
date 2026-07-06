import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, business, phone, about, goal } = body

    if (!name || !business || !phone) {
      return Response.json(
        { error: 'Name, business, and phone are required.' },
        { status: 400 }
      )
    }

    const goals = goal
      ? goal.split(',').map(g => g.trim()).filter(Boolean)
      : []

    const goalLabels = {
      customers: 'Attract more customers',
      trust:     'Build trust & credibility',
      sales:     'Sell products online',
      visible:   'Be found on Google',
      brand:     'Look more professional',
      social:    'Move beyond social media',
      bookings:  'Take bookings or enquiries',
      other:     'Something else',
    }

    const goalList = goals.length
      ? goals.map(g => `• ${goalLabels[g] || g}`).join('\n')
      : '• Not specified'

    const html = `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #0F0B08; color: #F2EAD8; padding: 48px 40px; border-radius: 8px;">

        <div style="margin-bottom: 40px; padding-bottom: 32px; border-bottom: 1px solid #2E2218;">
          <p style="font-family: Arial, sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #C9973A; margin: 0 0 12px;">New Inquiry</p>
          <h1 style="font-size: 28px; font-weight: 900; color: #F2EAD8; margin: 0; letter-spacing: -0.03em;">Atlas Ethiopia</h1>
          <p style="font-size: 13px; color: #8A7560; margin: 6px 0 0; font-style: italic;">Someone wants to talk about their business.</p>
        </div>

        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 16px 0; border-bottom: 1px solid #2E2218; vertical-align: top; width: 140px;">
              <p style="font-family: Arial, sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: #7A5A20; margin: 0;">Name</p>
            </td>
            <td style="padding: 16px 0; border-bottom: 1px solid #2E2218; vertical-align: top;">
              <p style="font-size: 16px; color: #F2EAD8; margin: 0; font-weight: 700;">${name}</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 16px 0; border-bottom: 1px solid #2E2218; vertical-align: top;">
              <p style="font-family: Arial, sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: #7A5A20; margin: 0;">Business</p>
            </td>
            <td style="padding: 16px 0; border-bottom: 1px solid #2E2218; vertical-align: top;">
              <p style="font-size: 16px; color: #F2EAD8; margin: 0; font-weight: 700;">${business}</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 16px 0; border-bottom: 1px solid #2E2218; vertical-align: top;">
              <p style="font-family: Arial, sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: #7A5A20; margin: 0;">Phone</p>
            </td>
            <td style="padding: 16px 0; border-bottom: 1px solid #2E2218; vertical-align: top;">
              <p style="font-size: 16px; color: #F2EAD8; margin: 0;">${phone}</p>
            </td>
          </tr>
          ${about ? `
          <tr>
            <td style="padding: 16px 0; border-bottom: 1px solid #2E2218; vertical-align: top;">
              <p style="font-family: Arial, sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: #7A5A20; margin: 0;">About</p>
            </td>
            <td style="padding: 16px 0; border-bottom: 1px solid #2E2218; vertical-align: top;">
              <p style="font-size: 15px; color: #8A7560; margin: 0; line-height: 1.7; font-style: italic;">${about}</p>
            </td>
          </tr>
          ` : ''}
          <tr>
            <td style="padding: 16px 0; vertical-align: top;">
              <p style="font-family: Arial, sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: #7A5A20; margin: 0;">Goals</p>
            </td>
            <td style="padding: 16px 0; vertical-align: top;">
              <p style="font-size: 15px; color: #C9973A; margin: 0; line-height: 1.9; white-space: pre-line;">${goalList}</p>
            </td>
          </tr>
        </table>

        <div style="margin-top: 40px; padding-top: 32px; border-top: 1px solid #2E2218; text-align: center;">
          <p style="font-family: Arial, sans-serif; font-size: 11px; color: #8A7560; letter-spacing: 0.1em; text-transform: uppercase; margin: 0;">Atlas Ethiopia — Digital Studio</p>
        </div>

      </div>
    `

    const { error } = await resend.emails.send({
      from:    'Atlas Ethiopia <onboarding@resend.dev>',
      to:      [process.env.CONTACT_EMAIL],
      subject: `New inquiry from ${name} — ${business}`,
      html,
    })

    if (error) {
      console.error('Resend error:', error)
      return Response.json({ error: 'Failed to send email.' }, { status: 500 })
    }

    return Response.json({ success: true })

  } catch (err) {
    console.error('API error:', err)
    return Response.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}