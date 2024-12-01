import prisma from "@/lib/prisma";
import {
  userProfileSchema
} from "@/lib/userValidation";


export async function POST(req: Request) {
  try {
    const data = await req.json();
    const parseResult = userProfileSchema.safeParse(data);

    if (!parseResult.success) {
      console.error(parseResult.error);
      return Response.json({ error: "Invalid input" }, { status: 400 });
    }
   
    return Response.json({  }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal server srror" }, { status: 500 });
  }
}
// export async function PUT(req: Request) {
//   try {
//     const data = await req.json();
//     console.log("put", data);
//     const parseResult = updateNoteSchema.safeParse(data);

//     if (!parseResult.success) {
//       console.error(parseResult.error);
//       return Response.json({ error: "Invalid input" }, { status: 400 });
//     }

//     return Response.json({ updatednote }, { status: 200 });
//   } catch (error) {
//     console.error(error);
//     return Response.json({ error: "Internal server srror" }, { status: 500 });
//   }
// }



// export async function DELETE(req: Request) {
//   try {
//     const data = await req.json();
//     const parseResult = deleteNoteSchema.safeParse(data);

//     if (!parseResult.success) {
//       console.error(parseResult.error);
//       return Response.json({ error: "Invalid input" }, { status: 400 });
//     }

//     return Response.json({ message: "Note deleted" }, { status: 200 });
//   } catch (error) {
//     console.error(error);
//     return Response.json({ error: "Internal server srror" }, { status: 500 });
//   }
// }
