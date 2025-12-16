export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { email, source } = await req.json();

    // Email service endpoint (using a free email service)
    const emailData = {
      to: 'info@getsecondpassport.eu',
      subject: 'New Blog Newsletter Subscription',
      html: `
        <h2>New Newsletter Subscription</h2>
        <p><strong>Subscriber Email:</strong> ${email}</p>
        <p><strong>Subscribed From:</strong> ${source}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      `,
    };

    // Using Web3Forms (free service, no signup required)
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: 'YOUR_WEB3FORMS_KEY', // You'll need to get this from web3forms.com
        from_name: 'Dera Consultants Newsletter',
        subject: 'New Blog Newsletter Subscription',
        email: 'info@getsecondpassport.eu',
        message: `New subscriber: ${email}\nSource: ${source}\nDate: ${new Date().toLocaleString()}`,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to process subscription' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
