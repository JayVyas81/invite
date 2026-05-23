import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { 
      type, 
      passwordAttempt, 
      fashionStrategy, 
      excitedAdd, 
      unexpectedFeel, 
      gussaSelection,
      reviewText 
    } = await request.json();

    const webhookUrl = "https://discord.com/api/webhooks/1507578763385245806/7uTm0jY_iN_A1AJyHYfTlX7OOAwazSs3bIK3EDlziPfJw793ukuxSfM-NImNaCrPJVDX";

    let embed;

    if (type === 'wrong_password') {
      embed = {
        title: "❌ Wrong Password Attempted!",
        color: 0xff3333, // Vibrant Red color
        fields: [
          {
            name: "🔑 Attempted Password",
            value: passwordAttempt ? `\`\`\`${passwordAttempt}\`\`\`` : "`[Empty]`",
            inline: false
          },
          {
            name: "🕵️‍♂️ Status",
            value: "Blocked & laughed at 😂",
            inline: true
          }
        ],
        timestamp: new Date().toISOString(),
        footer: {
          text: "Interactive Invitation Security System 🔒"
        }
      };
    } else {
      embed = {
        title: "💌 New Meetup Invitation Response!",
        color: 0xff69b4, // Sleek pink color
        fields: [
          {
            name: "🍼 Subeh Subeh Reaction",
            value: gussaSelection || "None provided",
            inline: false
          },
          {
            name: "👗 Fashion Strategy",
            value: fashionStrategy || "None provided",
            inline: false
          },
          {
            name: "💥 Added Excitement Suggestions",
            value: excitedAdd || "None provided",
            inline: false
          },
          {
            name: "🎁 Desired Instant Surprise",
            value: unexpectedFeel || "None provided",
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
          text: "Interactive Invitation Bot 💖"
        }
      };
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: type === 'wrong_password' ? "Security Guardian 🕵️‍♂️" : "Invitation Bot 💖",
        avatar_url: type === 'wrong_password' 
          ? "https://media.tenor.com/ReQxtH3IKfgAAAAC/cat-fbi.gif" 
          : "https://media.tenor.com/_hUq1BSUsiMAAAAC/cat-cute.gif",
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
