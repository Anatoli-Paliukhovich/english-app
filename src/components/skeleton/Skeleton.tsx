import ContentLoader from "react-content-loader";

const Skeleton = (props: any) => (
  <ContentLoader
    speed={2}
    width={260}
    height={310}
    viewBox="0 0 260 310"
    backgroundColor="#c1b6ad"
    foregroundColor="#e1d4c9"
    {...props}
  >
    <rect x="2" y="2" rx="7" ry="7" width="250" height="297" />
  </ContentLoader>
);

export default Skeleton;
