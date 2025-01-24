import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"

const posts = [
    {
      "title": "My Day",
      "slug": "my-day",
      "content": "Today was a really tough day. I failed my math test and my best friend was being really mean to me. I just want to listen to some music and forget about everything."
    },
    {
      "title": "New Anime I'm Watching",
      "slug": "new-anime-im-watching",
      "content": "I just started watching this new anime called \"My Hero Academia\" and it's so good! I can't wait to see what happens next."
    },
    {
      "title": "New Skateboard!",
      "slug": "new-skateboard",
      "content": "I just got a new skateboard and it's so awesome! I can't wait to try it out at the skatepark."
    },
    {
      "title": "Concert Review",
      "slug": "concert-review",
      "content": "I went to see my favorite band in concert last night and it was amazing! They played all my favorite songs and the energy was incredible."
    },
    {
      "title": "New Game Release!",
      "slug": "new-game-release",
      "content": "I'm so excited for the new \"Elder Scrolls\" game that's coming out soon! I've been waiting for this for years."
    },
    {
      "title": "New Recipe I Tried",
      "slug": "new-recipe-i-tried",
      "content": "I tried a new recipe for chocolate chip cookies today and they turned out amazing! I'll definitely be making these again."
    }
  ]

  export async function GET() {

    const session = await getServerSession();

    return NextResponse.json(posts)
  }