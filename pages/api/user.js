import prisma from "../../lib/prisma";
// export this from the api route
export const config = {
  api: {
    externalResolver: true,
  },
};

export default async (req, res) => {
  try {
    const response = await prisma.user.findMany();
    res.json({ response });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: e });
  }
  return res.status(500);
};
