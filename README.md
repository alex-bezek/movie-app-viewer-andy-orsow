# TODO
Basic transitions work, but they aren't on par with the animations in the original gif's. Things expand and fade in, but they don't come from the origin of the original element (the background color expands from the middle. The thumbnail image doesn't animate at all)


## Links important to the gif and original author of the animation
* https://www.youtube.com/watch?v=8Ap7sdfDa3Y&feature=youtu.be
* https://dribbble.com/shots/3928430-InVision-Studio-Media-app-prototype
* https://medium.muz.li/ui-interactions-of-the-week-100-bf7cf11de95c

## Links and thoughts from looking up animations
Methods to try transitioning things

Manual way
https://github.com/sjparsons/housetopia/blob/master/src/components/AnimateTransitionToHouse.js
has a component that does animations when it renders. It sets a timeout, and when timeout is done, it redirects to the real destination


June 25
https://hackernoon.com/animated-page-transitions-with-react-router-4-reacttransitiongroup-and-animated-1ca17bd97a1a
uses `animated` library for animations
uses `react-transition-group` for transitioning between routes. Uses TransitionGroup and renders this as a child of the router


Aug 23
https://blog.logrocket.com/routes-animation-transitions-in-react-router-v4-9f4788deb964
uses `react-addons-css-transition-group` to wrap components.
Uses a <ReactCSSTransitionGroup /> to wrap groups of components.
You then define enter, leave, active css classes to animate individual elements
https://reactjs.org/docs/animation.html#animate-initial-mounting talks about API including transition appear


Sep 02
https://medium.com/@pshrmn/a-shallow-dive-into-react-router-v4-animated-transitions-4b73f634992a
Uses `react-transition-group` to create <TransitionGroup> groups.
Previously, react-transition-group, the children of a <TransitionGroup> could be any component type.
However, in v2, these should be either <Transition>s or <CSSTransition>
Discusses manually passing location to router to help render "exiting routes"
This seems to only work for animating the whole switch to fade entire pages in and out
https://reacttraining.com/react-router/web/example/animated-transitions (another example)



 react-addons-css-transition-group deprecated in React 16+ #27 . Use `react-transition-group` instead.
 https://github.com/reactjs/react-transition-group
 https://reactcommunity.org/react-transition-group/


 omg anther one react-addons-transition-group