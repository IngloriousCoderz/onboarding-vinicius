// HOC - Higher Order Component

function Component({ content }) {
  return <div>{content}</div>;
}

function ComponentWrapper({ content }) {
  const shoutedContent = content.toUpperCase();
  return <Component content={shoutedContent} />;
}

const shout = (Enhanced) =>
  function GenericWrapper({ content }) {
    const shoutedContent = content.toUpperCase();
    return <Enhanced content={shoutedContent} />;
  };

const ShoutedComponent = shout(Component);

function useShout(msg) {
  return msg.toUpperCase();
}

function Component({ content }) {
  const shoutedContent = useShout(content);
  return <div>{shoutedContent}</div>;
}

import { memo } from "react";

function Component({ content }) {
  return <div>{content}</div>;
}

memo(Component);

const punctuate = (mark) => (Enhanced) =>
  function GenericWrapper({ content }) {
    const punctuatedContent = content + mark;
    return <Enhanced content={punctuatedContent} />;
  };

const ExclamatedComponent = punctuate("!")(Component);

const enhance = compose(pize, exclamate, shout);

enhance(Component);
