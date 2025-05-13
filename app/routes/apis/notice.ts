import prisma from '~/.server/lib/prisma';

export const loader = async () => {
  console.log('Loader function called');
  const notices = await prisma.notice.findMany();
  console.log('Notices:', notices);
  return { notices };
};

export const action = async ({ request }) => {
  const payload = await request.json();
  const { title, content } = payload;
  console.log('Payload received:', payload);
  await prisma.notice.create({
    data: {
      title,
      content,
    },
  });
  console.log('Notice created');
  return { status: 'ok' };
};
