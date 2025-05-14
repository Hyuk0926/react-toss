import prisma from '~/.server/lib/prisma';

export const action = async ({ request }) => {
  const payload = await request.json();

  if (Array.isArray(payload)) {
    await Promise.all(
      payload.map(({ title, content }) =>
        prisma.notice.create({
          data: { title, content },
        }),
      ),
    );
  } else {
    const { title, content } = payload;
    await prisma.notice.create({
      data: { title, content },
    });
  }

  return { status: 'ok' };
};
