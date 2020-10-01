export type Experience = Partial<{
  title: string;
  // eslint-disable-next-line no-undef
  icon: JSX.Element;
  color: string;
  date: string;
  content: string;
  // eslint-disable-next-line no-undef
  link: JSX.Element;
}>;

export type Experiences = {
  experieces: Experience[];
};
