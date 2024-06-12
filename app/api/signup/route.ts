import User from "@/models/User";
import { genSalt, hash } from "bcryptjs";

export async function POST(request: Request) {
  try {
    type Body = {
      username: string;
      email: string;
      password: string;
    };
    const body: Body = await request.json();
    const user = await User.findOne({
      $or: [
        {
          email: body.email,
        },
        {
          username: body.username,
        },
      ],
    });
    if (user) {
      return new Response("User already exists with same email or username!", {
        status: 400,
      });
    }
    const salt = await genSalt(10);
    const newPassword = await hash(body.password, salt);

    const newUser = new User({
      email: body.email,
      username: body.username,
      password: newPassword,
    });

    await newUser.save();
    return new Response("User signup success!", {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 500,
    });
  }
}
