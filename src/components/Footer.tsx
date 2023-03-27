import { Container, Group, Anchor, rem } from '@mantine/core';
import { MantineLogo } from '@mantine/ds';

type FooterSimpleProps = {
  links: { link: string; label: string }[];
}

export function MyFooter({ links }: FooterSimpleProps) {
  const items = links.map((link) => (
    <Anchor<'a'>
      color="dimmed"
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className="footer">
      <Container className="w-full flex font-bold justify-between">
        <MantineLogo size={28} />
        <Group>{items}</Group>
      </Container>
    </div>
  );
}

