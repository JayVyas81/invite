import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { fashionStrategy, reviewText } = await request.json();

    const webhookUrl = "https://discord.com/api/webhooks/1507578763385245806/7uTm0jY_iN_A1AJyHYfTlX7OOAwazSs3bIK3EDlziPfJw793ukuxSfM-NImNaCrPJVDX";

    // Format a beautiful rich embed message for Discord
    const embed = {
      title: "💌 New Meetup Invitation Response!",
      color: 0xff69b4, // Sleek pink color
      fields: [
        {
          name: "👗 Fashion Strategy",
          value: fashionStrategy || "None provided",
          inline: false
        },
        {
          name: "🤩 Excitement Level & Action",
          value: reviewText || "None provided",
          inline: false
        }
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: "Interactive Invitation Bot"
      }
    };

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: "Invitation Bot 💖",
        avatar_url: "https://media.tenor.com/_hUq1BSUsiMAAAAC/cat-cute.gif",
        embeds: [embed],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json({ success: false, error: errorText }, { status: response.status });
    }

    return NextResponse.json({ success: true, message: "Successfully sent to Discord!" });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
