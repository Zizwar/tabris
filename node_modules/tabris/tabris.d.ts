// Type definitions for Tabris.js v1.8

interface TextMetrics {

  /**
   * The calculated width of a segment of text.
   * It takes into account the current font of the context.
   */
  width: number;
}

export class CanvasContext {

  /**
   * The thickness of lines in space units.
   */
  lineWidth: number;

  /**
   * Determines how the end points of every line are drawn.
   */
  lineCap: "butt" | "round" | "square";

  /**
   * Determines how two connecting segments in a shape are joined together.
   */
  lineJoin: "bevel" | "round" | "miter";

  /**
   * Specifies the color to use inside shapes.
   */
  fillStyle: string;

  /**
   * Specifies the current text style being used when drawing text.
   */
  font: string;

  /**
   * Specifies the color to use for the lines around shapes.
   */
  strokeStyle: string;

  /**
   * Specifies the current text alignment being used when drawing text.
   */
  textAlign: "left" | "right" | "center" | "start" | "end";

  /**
   * Specifies the current text baseline being used when drawing text.
   */
  textBaseline: "top" | "hanging" | "middle" | "alphabetic" | "ideographic" | "bottom";

  /**
   * Saves the entire state of the canvas by pushing the current state onto a stack.
   */
  save(): void;

  /**
   * Restores the most recently saved canvas state by popping the top entry in the drawing state stack.
   */
  restore(): void;

  /**
   * Starts a new path by emptying the list of sub-paths.
   */
  beginPath(): void;

  /**
   * Adds a straight line from the current point to the start of the current sub-path.
   */
  closePath(): void;

  /**
   * Connects the last point in the sub-path to the *(x, y)* coordinates with a straight line.
   * @param x The x axis of the coordinate for the end of the line.
   * @param y The y axis of the coordinate for the end of the line.
   */
  lineTo(x: number, y: number): void;

  /**
   * Moves the starting point of a new sub-path to the *(x, y)* coordinates.
   * @param x The x axis of the point.
   * @param y The y axis of the point.
   */
  moveTo(x: number, y: number): void;

  /**
   * Adds a cubic Bézier curve to the path. The starting point is the last point in the current path.
   * @param cp1x The x axis of the coordinate for the first control point.
   * @param cp1y The y axis of the coordinate for the first control point.
   * @param cp2x The x axis of the coordinate for the second control point.
   * @param cp2y The y axis of the coordinate for the second control point.
   * @param x The x axis of the coordinate for the end point.
   * @param y The y axis of the coordinate for the end point.
   */
  bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;

  /**
   * Adds a quadratic Bézier curve to the path. The starting point is the last point in the current path.
   * @param cpx The x axis of the coordinate for the control point.
   * @param cpy The y axis of the coordinate for the control point.
   * @param x The x axis of the coordinate for the end point.
   * @param y The y axis of the coordinate for the end point.
   */
  quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;

  /**
   * Creates a path for a rectangle with the top-left corner at *(x, y)*.
   * @param x The x axis of the rectangle starting point.
   * @param y The y axis of the rectangle starting point.
   * @param width The rectangle's width.
   * @param height The rectangles height.
   */
  rect(x: number, y: number, width: number, height: number): void;

  /**
   * Adds an arc to the path which is centered at *(x, y)* position with radius *r* starting at *startAngle*
   * and ending at *endAngle* going in the given direction by *anticlockwise* (defaulting to clockwise).
   * @param x The x coordinate of the arc's center.
   * @param y The y coordinate of the arc's center.
   * @param radius The arc's radius.
   * @param startAngle The angle in radians at which the arc starts, measured clockwise from the positive x axis.
   * @param startAngle The angle in radians at which the arc ends, measured clockwise from the positive x axis.
   * @param anticlockwise? if true, causes the arc to be drawn counter-clockwise between the two angles.
   */
  arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;

  /**
   * Adds a scaling transformation to the canvas units by x horizontally and by y vertically.
   * @param x Scaling factor in the horizontal direction.
   * @param y Scaling factor in the vertical direction.
   */
  scale(x: number, y: number): void;

  /**
   * Adds a rotation to the transformation matrix.
   * @param angle The angle to rotate clockwise in radians.
   */
  rotate(angle: number): void;

  /**
   * Adds a translation transformation by moving the canvas and its origin
   * *x* horizontally and *y* vertically on the grid.
   * @param x The distance to move in the horizontal direction.
   * @param y The distance to move in the vertical direction.
   */
  translate(x: number, y: number): void;

  /**
   * Multiplies the current transformation with the matrix described by the arguments of this method.
   * The matrix has the following format:
   * [[a, c, e],
   *  [b, d, f],
   *  [0, 0, 1]]
   * @param a Horizontal scaling.
   * @param b Horizontal skewing.
   * @param c Vertical skewing.
   * @param d Vertical scaling.
   * @param e Horizontal moving.
   * @param f Vertical moving.
   */
  transform(a: number, b: number, c: number, d: number, e: number, f: number): void;

  /**
   * resets (overrides) the current transformation to the identity matrix and then
   * invokes a transformation described by the arguments of this method.
   * The matrix has the following format:
   * [[a, c, e],
   *  [b, d, f],
   *  [0, 0, 1]]
   * @param a Horizontal scaling.
   * @param b Horizontal skewing.
   * @param c Vertical skewing.
   * @param d Vertical scaling.
   * @param e Horizontal moving.
   * @param f Vertical moving.
   */
  setTransform(a: number, b: number, c: number, d: number, e: number, f: number): void;

  /**
   * Sets all pixels in the rectangle defined by starting point *(x, y)*.
   * and size *(width, height)* to transparent black, erasing any previously drawn content.
   * @param x The x axis of the rectangle starting point.
   * @param y The y axis of the rectangle starting point.
   * @param width The rectangle's width.
   * @param height The rectangles height.
   */
  clearRect(x: number, y: number, width: number, height: number): void;

  /**
   * draws a filled rectangle at *(x, y)* position whose size is determined by *width* and *height*.
   * and whose color is determined by the fillStyle attribute.
   * @param x The x axis of the rectangle starting point.
   * @param y The y axis of the rectangle starting point.
   * @param width The rectangle's width.
   * @param height The rectangles height.
   */
  fillRect(x: number, y: number, width: number, height: number): void;

  /**
   * draws the outline of a rectangle at *(x, y)* position whose size is determined by *width* and *height*
   * using the current stroke style.
   * @param x The x axis of the rectangle starting point.
   * @param y The y axis of the rectangle starting point.
   * @param width The rectangle's width.
   * @param height The rectangles height.
   */
  strokeRect(x: number, y: number, width: number, height: number): void;

  /**
   * Fills a given text at the given *(x, y)* position using the current *textAlign* and
   * *textBaseline* values. If the optional fourth parameter for a maximum width is provided,
   * the text will be scaled to fit that width.
   * @param text The text to render.
   * @param x The x axis of the coordinate for the text starting point.
   * @param y The y axis of the coordinate for the text starting point.
   * @param  maxWidth? The maximum width to draw.
   */
  fillText(text: string, x: number, y: number, maxWidth?: number): void;

  /**
   * Strokes a given text at the given *(x, y)* position using the current *textAlign* and
   * *textBaseline* values. If the optional fourth parameter for a maximum width is provided,
   * the text will be scaled to fit that width.
   * @param text The text to render.
   * @param x The x axis of the coordinate for the text starting point.
   * @param y The y axis of the coordinate for the text starting point.
   * @param  maxWidth? The maximum width to draw.
   */
  strokeText(text: string, x: number, y: number, maxWidth?: number): void;

  /**
   * Fills the current or path with the current fill style using the non-zero or even-odd winding rule.
   * @param fillRule? The algorithm by which to determine if a point is inside a path or outside a path.
   */
  fill(fillRule?: "nonzero" | "evenodd"): void;

  /**
   * Strokes the current path with the current stroke style using the non-zero winding rule.
   */
  stroke(): void;

  /**
   * Returns a *TextMetrics* object that contains information about the measured text.
   * @param text The text to measure.
   */
  text(text: string): TextMetrics;
}

// TODO A plain string can be used as a shorthand, e.g. `"image.jpg"` equals `{src: "image.jpg"}`.
interface Image {

  /**
   * Image path or URL.
   */
  src?: string;

  /**
   * Image width, extracted from the image file when missing.
   */
  width?: number;

  /**
   * Image height, extracted from the image file when missing.
   */
  height?: number;

  /**
   * Image scale factor - the image will be scaled down by this factor.
   * Ignored when width or height are set.
   */
  scale?: number;
}

type Color = string;

type Font = string;

type LayoutData = any;

type GestureObject = any;

interface Bounds {

  /**
   * the horizontal offset from the parent's left edge in dip
   */
  left?: number;

  /**
   * the vertical offset from the parent's top edge in dip
   */
  top?: number;

  /**
   * the width of the widget in dip
   */
  width?: number;

  /**
   * the height of the widget in dip
   */
  height?: number;

}

interface Transformation {

  /**
   * Clock-wise rotation in radians. Defaults to `0`.
   */
   rotation?: number;

  /**
   * Horizontal scale factor. Defaults to `1`.
   */
  scaleX?: number;

  /**
   * Vertical scale factor. Defaults to `1`.
   */
  scaleY?: number;

  /**
   * Horizontal translation (shift) in dip. Defaults to `0`.
   */
  translationX?: number;

  /**
   * Vertical translation (shift) in dip. Defaults to `0`.
   */
  translationY?: number;

  /**
   * Z-axis translation (shift) in dip. Defaults to `0`. Android 5.0+ only.
   */
  translationZ?: number;

}

type Selector = string;

type dimension = number;

type offset = number;

type margin = any;

// Action

/**
 * An executable item that is integrated in the application's navigation menu. Add a listener on
 * *select* to implement the action.
 */
export class Action extends Widget {

  constructor(properties?: ActionProperties);

  /**
   * Removes all occurrences of *listener* that are bound to *event* and *context* from this widget.
   * If the context parameter is not present, all matching listeners will be removed.
   * If the listener parameter is not present, all listeners that are bound to *event* will be removed.
   * If the event parameter is not present, all listeners for all events will be removed from this widget.
   * Supports chaining.
   * @param event
   * @param listener
   * @param context
   */
  off(event?: string, listener?: Function, context?: this): this;
  off(event: "animationend", listener?: Function, context?: this): this;
  off(event: "animationstart", listener?: Function, context?: this): this;
  off(event: "change:{property}", listener?: Function, context?: this): this;
  off(event: "dispose", listener?: Function, context?: this): this;
  off(event: "longpress", listener?: Function, context?: this): this;
  off(event: "pan", listener?: Function, context?: this): this;
  off(event: "pan:down", listener?: Function, context?: this): this;
  off(event: "pan:left", listener?: Function, context?: this): this;
  off(event: "pan:right", listener?: Function, context?: this): this;
  off(event: "pan:up", listener?: Function, context?: this): this;
  off(event: "resize", listener?: Function, context?: this): this;
  off(event: "select", listener?: Function, context?: this): this;
  off(event: "swipe:down", listener?: Function, context?: this): this;
  off(event: "swipe:left", listener?: Function, context?: this): this;
  off(event: "swipe:right", listener?: Function, context?: this): this;
  off(event: "swipe:up", listener?: Function, context?: this): this;
  off(event: "tap", listener?: Function, context?: this): this;
  off(event: "touchcancel", listener?: Function, context?: this): this;
  off(event: "touchend", listener?: Function, context?: this): this;
  off(event: "touchmove", listener?: Function, context?: this): this;
  off(event: "touchstart", listener?: Function, context?: this): this;

  /**
   * Adds a *listener* to the list of functions to be notified when *event* is fired. If the context
   * parameter is not present, the listener will be called in the context of this object. Supports
   * chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  on(event: string, listener: Function, context?: this): this;
  on(event: "animationend", listener: (widget: this, options: Object) => any): this;
  on(event: "animationstart", listener: (widget: this, options: Object) => any): this;
  on(event: "change:{property}", listener: (widget: this, value: any, options: Object) => any): this;
  on(event: "dispose", listener: (widget: this) => any): this;
  on(event: "longpress", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "resize", listener: (widget: this, bounds: Bounds, options: Object) => any): this;
  on(event: "select", listener: (widget: this) => any): this;
  on(event: "swipe:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "tap", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "touchcancel", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchend", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchmove", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchstart", listener: (widget: this, gesture: TouchEvent) => any): this;

  /**
   * Same as `on`, but removes the listener after it has been invoked by an event. Supports chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  once(event: string, listener: Function, context?: this): this;
  once(event: "animationend", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "animationstart", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "change:{property}", listener: (widget: this, value: any, options: Object, context?: this) => any): this;
  once(event: "dispose", listener: (widget: this, context?: this) => any): this;
  once(event: "longpress", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "resize", listener: (widget: this, bounds: Bounds, options: Object, context?: this) => any): this;
  once(event: "select", listener: (widget: this, context?: this) => any): this;
  once(event: "swipe:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "tap", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "touchcancel", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchend", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchmove", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchstart", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;

  /**
   * Triggers an event of the given type. All registered listeners will be notified. Additional parameters
   * will be passed to the listeners.
   * @param event
   * @param ...params
   */
  trigger(event: string, ...params: any[]): this;

  /**
   * Gets the current value of the given *property*.
   * @param property
   */
  get(property: string): any;

  /**
   * Background color of the widget.
   */
  get(property: "background"): Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  get(property: "backgroundImage"): Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  get(property: "baseline"): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  get(property: "bottom"): margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  get(property: "bounds"): Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  get(property: "centerX"): offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  get(property: "centerY"): offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  get(property: "class"): string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  get(property: "cornerRadius"): number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  get(property: "elevation"): number;

  /**
   * Whether the widget can be operated.
   */
  get(property: "enabled"): boolean;

  /**
   * The font used for the widget.
   */
  get(property: "font"): Font;

  /**
   * The height of the widget.
   */
  get(property: "height"): dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  get(property: "highlightOnTouch"): boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  get(property: "id"): string;

  /**
   * Icon image for the action.
   */
  get(property: "image"): Image;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  get(property: "layoutData"): LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  get(property: "left"): margin;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  get(property: "opacity"): number;

  /**
   * Actions with higher placement priority will be placed at a more significant position in the UI, e.g.
   * low priority actions could go into a menu instead of being included in a toolbar.
   */
  get(property: "placementPriority"): string;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  get(property: "right"): margin;

  /**
   * Text color of the widget.
   */
  get(property: "textColor"): Color;

  /**
   * The text to be displayed for the action.
   */
  get(property: "title"): string;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  get(property: "top"): margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  get(property: "transform"): Transformation;

  /**
   * Whether the widget is visible.
   */
  get(property: "visible"): boolean;

  /**
   * The width of the widget.
   */
  get(property: "width"): dimension;

  /**
   * Sets the given property. Supports chaining.
   * @param property
   * @param value
   */
  set(property: string, value: any): this;

  /**
   * Sets all key-value pairs in the properties object as widget properties. Supports chaining.
   * @param properties
   */
  set(properties: ActionProperties): this;

  /**
   * Background color of the widget.
   */
  set(property: "background", value: Color): this;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  set(property: "backgroundImage", value: Image): this;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  set(property: "baseline", value: this): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  set(property: "bottom", value: margin): this;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  set(property: "bounds", value: Bounds): this;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  set(property: "centerX", value: offset): this;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  set(property: "centerY", value: offset): this;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  set(property: "class", value: string): this;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  set(property: "cornerRadius", value: number): this;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  set(property: "elevation", value: number): this;

  /**
   * Whether the widget can be operated.
   */
  set(property: "enabled", value: boolean): this;

  /**
   * The font used for the widget.
   */
  set(property: "font", value: Font): this;

  /**
   * The height of the widget.
   */
  set(property: "height", value: dimension): this;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  set(property: "highlightOnTouch", value: boolean): this;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  set(property: "id", value: string): this;

  /**
   * Icon image for the action.
   */
  set(property: "image", value: Image): this;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  set(property: "layoutData", value: LayoutData): this;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  set(property: "left", value: margin): this;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  set(property: "opacity", value: number): this;

  /**
   * Actions with higher placement priority will be placed at a more significant position in the UI, e.g.
   * low priority actions could go into a menu instead of being included in a toolbar.
   */
  set(property: "placementPriority", value: string): this;
  set(property: "placementPriority", value: "high"): this;
  set(property: "placementPriority", value: "low"): this;
  set(property: "placementPriority", value: "normal"): this;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  set(property: "right", value: margin): this;

  /**
   * Text color of the widget.
   */
  set(property: "textColor", value: Color): this;

  /**
   * The text to be displayed for the action.
   */
  set(property: "title", value: string): this;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  set(property: "top", value: margin): this;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  set(property: "transform", value: Transformation): this;

  /**
   * Whether the widget is visible.
   */
  set(property: "visible", value: boolean): this;

  /**
   * The width of the widget.
   */
  set(property: "width", value: dimension): this;
}

interface ActionProperties extends WidgetProperties {

  /**
   * Background color of the widget.
   */
  background?: Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  backgroundImage?: Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  baseline?: this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  bottom?: margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  bounds?: Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  centerX?: offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  centerY?: offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  class?: string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  cornerRadius?: number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  elevation?: number;

  /**
   * Whether the widget can be operated.
   */
  enabled?: boolean;

  /**
   * The font used for the widget.
   */
  font?: Font;

  /**
   * The height of the widget.
   */
  height?: dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  highlightOnTouch?: boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  id?: string;

  /**
   * Icon image for the action.
   */
  image?: Image;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  layoutData?: LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  left?: margin;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  opacity?: number;

  /**
   * Actions with higher placement priority will be placed at a more significant position in the UI, e.g.
   * low priority actions could go into a menu instead of being included in a toolbar.
   */
  placementPriority?: string;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  right?: margin;

  /**
   * Text color of the widget.
   */
  textColor?: Color;

  /**
   * The text to be displayed for the action.
   */
  title?: string;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  top?: margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  transform?: Transformation;

  /**
   * Whether the widget is visible.
   */
  visible?: boolean;

  /**
   * The width of the widget.
   */
  width?: dimension;
}

// ActivityIndicator

/**
 * A widget representing a spinning indicator for indeterminate loading / processing time.
 */
export class ActivityIndicator extends Widget {

  constructor(properties?: ActivityIndicatorProperties);

  /**
   * Removes all occurrences of *listener* that are bound to *event* and *context* from this widget.
   * If the context parameter is not present, all matching listeners will be removed.
   * If the listener parameter is not present, all listeners that are bound to *event* will be removed.
   * If the event parameter is not present, all listeners for all events will be removed from this widget.
   * Supports chaining.
   * @param event
   * @param listener
   * @param context
   */
  off(event?: string, listener?: Function, context?: this): this;
  off(event: "animationend", listener?: Function, context?: this): this;
  off(event: "animationstart", listener?: Function, context?: this): this;
  off(event: "change:{property}", listener?: Function, context?: this): this;
  off(event: "dispose", listener?: Function, context?: this): this;
  off(event: "longpress", listener?: Function, context?: this): this;
  off(event: "pan", listener?: Function, context?: this): this;
  off(event: "pan:down", listener?: Function, context?: this): this;
  off(event: "pan:left", listener?: Function, context?: this): this;
  off(event: "pan:right", listener?: Function, context?: this): this;
  off(event: "pan:up", listener?: Function, context?: this): this;
  off(event: "resize", listener?: Function, context?: this): this;
  off(event: "swipe:down", listener?: Function, context?: this): this;
  off(event: "swipe:left", listener?: Function, context?: this): this;
  off(event: "swipe:right", listener?: Function, context?: this): this;
  off(event: "swipe:up", listener?: Function, context?: this): this;
  off(event: "tap", listener?: Function, context?: this): this;
  off(event: "touchcancel", listener?: Function, context?: this): this;
  off(event: "touchend", listener?: Function, context?: this): this;
  off(event: "touchmove", listener?: Function, context?: this): this;
  off(event: "touchstart", listener?: Function, context?: this): this;

  /**
   * Adds a *listener* to the list of functions to be notified when *event* is fired. If the context
   * parameter is not present, the listener will be called in the context of this object. Supports
   * chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  on(event: string, listener: Function, context?: this): this;
  on(event: "animationend", listener: (widget: this, options: Object) => any): this;
  on(event: "animationstart", listener: (widget: this, options: Object) => any): this;
  on(event: "change:{property}", listener: (widget: this, value: any, options: Object) => any): this;
  on(event: "dispose", listener: (widget: this) => any): this;
  on(event: "longpress", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "resize", listener: (widget: this, bounds: Bounds, options: Object) => any): this;
  on(event: "swipe:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "tap", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "touchcancel", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchend", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchmove", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchstart", listener: (widget: this, gesture: TouchEvent) => any): this;

  /**
   * Same as `on`, but removes the listener after it has been invoked by an event. Supports chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  once(event: string, listener: Function, context?: this): this;
  once(event: "animationend", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "animationstart", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "change:{property}", listener: (widget: this, value: any, options: Object, context?: this) => any): this;
  once(event: "dispose", listener: (widget: this, context?: this) => any): this;
  once(event: "longpress", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "resize", listener: (widget: this, bounds: Bounds, options: Object, context?: this) => any): this;
  once(event: "swipe:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "tap", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "touchcancel", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchend", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchmove", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchstart", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;

  /**
   * Triggers an event of the given type. All registered listeners will be notified. Additional parameters
   * will be passed to the listeners.
   * @param event
   * @param ...params
   */
  trigger(event: string, ...params: any[]): this;

  /**
   * Gets the current value of the given *property*.
   * @param property
   */
  get(property: string): any;

  /**
   * Background color of the widget.
   */
  get(property: "background"): Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  get(property: "backgroundImage"): Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  get(property: "baseline"): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  get(property: "bottom"): margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  get(property: "bounds"): Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  get(property: "centerX"): offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  get(property: "centerY"): offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  get(property: "class"): string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  get(property: "cornerRadius"): number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  get(property: "elevation"): number;

  /**
   * Whether the widget can be operated.
   */
  get(property: "enabled"): boolean;

  /**
   * The font used for the widget.
   */
  get(property: "font"): Font;

  /**
   * The height of the widget.
   */
  get(property: "height"): dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  get(property: "highlightOnTouch"): boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  get(property: "id"): string;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  get(property: "layoutData"): LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  get(property: "left"): margin;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  get(property: "opacity"): number;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  get(property: "right"): margin;

  /**
   * Text color of the widget.
   */
  get(property: "textColor"): Color;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  get(property: "top"): margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  get(property: "transform"): Transformation;

  /**
   * Whether the widget is visible.
   */
  get(property: "visible"): boolean;

  /**
   * The width of the widget.
   */
  get(property: "width"): dimension;

  /**
   * Sets the given property. Supports chaining.
   * @param property
   * @param value
   */
  set(property: string, value: any): this;

  /**
   * Sets all key-value pairs in the properties object as widget properties. Supports chaining.
   * @param properties
   */
  set(properties: ActivityIndicatorProperties): this;

  /**
   * Background color of the widget.
   */
  set(property: "background", value: Color): this;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  set(property: "backgroundImage", value: Image): this;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  set(property: "baseline", value: this): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  set(property: "bottom", value: margin): this;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  set(property: "bounds", value: Bounds): this;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  set(property: "centerX", value: offset): this;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  set(property: "centerY", value: offset): this;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  set(property: "class", value: string): this;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  set(property: "cornerRadius", value: number): this;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  set(property: "elevation", value: number): this;

  /**
   * Whether the widget can be operated.
   */
  set(property: "enabled", value: boolean): this;

  /**
   * The font used for the widget.
   */
  set(property: "font", value: Font): this;

  /**
   * The height of the widget.
   */
  set(property: "height", value: dimension): this;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  set(property: "highlightOnTouch", value: boolean): this;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  set(property: "id", value: string): this;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  set(property: "layoutData", value: LayoutData): this;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  set(property: "left", value: margin): this;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  set(property: "opacity", value: number): this;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  set(property: "right", value: margin): this;

  /**
   * Text color of the widget.
   */
  set(property: "textColor", value: Color): this;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  set(property: "top", value: margin): this;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  set(property: "transform", value: Transformation): this;

  /**
   * Whether the widget is visible.
   */
  set(property: "visible", value: boolean): this;

  /**
   * The width of the widget.
   */
  set(property: "width", value: dimension): this;
}

interface ActivityIndicatorProperties extends WidgetProperties {

  /**
   * Background color of the widget.
   */
  background?: Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  backgroundImage?: Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  baseline?: this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  bottom?: margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  bounds?: Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  centerX?: offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  centerY?: offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  class?: string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  cornerRadius?: number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  elevation?: number;

  /**
   * Whether the widget can be operated.
   */
  enabled?: boolean;

  /**
   * The font used for the widget.
   */
  font?: Font;

  /**
   * The height of the widget.
   */
  height?: dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  highlightOnTouch?: boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  id?: string;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  layoutData?: LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  left?: margin;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  opacity?: number;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  right?: margin;

  /**
   * Text color of the widget.
   */
  textColor?: Color;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  top?: margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  transform?: Transformation;

  /**
   * Whether the widget is visible.
   */
  visible?: boolean;

  /**
   * The width of the widget.
   */
  width?: dimension;
}

// Button

/**
 * A push button. Can contain a text or an image.
 */
export class Button extends Widget {

  constructor(properties?: ButtonProperties);

  /**
   * Removes all occurrences of *listener* that are bound to *event* and *context* from this widget.
   * If the context parameter is not present, all matching listeners will be removed.
   * If the listener parameter is not present, all listeners that are bound to *event* will be removed.
   * If the event parameter is not present, all listeners for all events will be removed from this widget.
   * Supports chaining.
   * @param event
   * @param listener
   * @param context
   */
  off(event?: string, listener?: Function, context?: this): this;
  off(event: "animationend", listener?: Function, context?: this): this;
  off(event: "animationstart", listener?: Function, context?: this): this;
  off(event: "change:{property}", listener?: Function, context?: this): this;
  off(event: "dispose", listener?: Function, context?: this): this;
  off(event: "longpress", listener?: Function, context?: this): this;
  off(event: "pan", listener?: Function, context?: this): this;
  off(event: "pan:down", listener?: Function, context?: this): this;
  off(event: "pan:left", listener?: Function, context?: this): this;
  off(event: "pan:right", listener?: Function, context?: this): this;
  off(event: "pan:up", listener?: Function, context?: this): this;
  off(event: "resize", listener?: Function, context?: this): this;
  off(event: "select", listener?: Function, context?: this): this;
  off(event: "swipe:down", listener?: Function, context?: this): this;
  off(event: "swipe:left", listener?: Function, context?: this): this;
  off(event: "swipe:right", listener?: Function, context?: this): this;
  off(event: "swipe:up", listener?: Function, context?: this): this;
  off(event: "tap", listener?: Function, context?: this): this;
  off(event: "touchcancel", listener?: Function, context?: this): this;
  off(event: "touchend", listener?: Function, context?: this): this;
  off(event: "touchmove", listener?: Function, context?: this): this;
  off(event: "touchstart", listener?: Function, context?: this): this;

  /**
   * Adds a *listener* to the list of functions to be notified when *event* is fired. If the context
   * parameter is not present, the listener will be called in the context of this object. Supports
   * chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  on(event: string, listener: Function, context?: this): this;
  on(event: "animationend", listener: (widget: this, options: Object) => any): this;
  on(event: "animationstart", listener: (widget: this, options: Object) => any): this;
  on(event: "change:{property}", listener: (widget: this, value: any, options: Object) => any): this;
  on(event: "dispose", listener: (widget: this) => any): this;
  on(event: "longpress", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "resize", listener: (widget: this, bounds: Bounds, options: Object) => any): this;
  on(event: "select", listener: (widget: this) => any): this;
  on(event: "swipe:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "tap", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "touchcancel", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchend", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchmove", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchstart", listener: (widget: this, gesture: TouchEvent) => any): this;

  /**
   * Same as `on`, but removes the listener after it has been invoked by an event. Supports chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  once(event: string, listener: Function, context?: this): this;
  once(event: "animationend", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "animationstart", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "change:{property}", listener: (widget: this, value: any, options: Object, context?: this) => any): this;
  once(event: "dispose", listener: (widget: this, context?: this) => any): this;
  once(event: "longpress", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "resize", listener: (widget: this, bounds: Bounds, options: Object, context?: this) => any): this;
  once(event: "select", listener: (widget: this, context?: this) => any): this;
  once(event: "swipe:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "tap", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "touchcancel", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchend", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchmove", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchstart", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;

  /**
   * Triggers an event of the given type. All registered listeners will be notified. Additional parameters
   * will be passed to the listeners.
   * @param event
   * @param ...params
   */
  trigger(event: string, ...params: any[]): this;

  /**
   * Gets the current value of the given *property*.
   * @param property
   */
  get(property: string): any;

  /**
   * The horizontal alignment of the button text.
   */
  get(property: "alignment"): string;

  /**
   * Background color of the widget.
   */
  get(property: "background"): Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  get(property: "backgroundImage"): Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  get(property: "baseline"): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  get(property: "bottom"): margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  get(property: "bounds"): Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  get(property: "centerX"): offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  get(property: "centerY"): offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  get(property: "class"): string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  get(property: "cornerRadius"): number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  get(property: "elevation"): number;

  /**
   * Whether the widget can be operated.
   */
  get(property: "enabled"): boolean;

  /**
   * The font used for the widget.
   */
  get(property: "font"): Font;

  /**
   * The height of the widget.
   */
  get(property: "height"): dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  get(property: "highlightOnTouch"): boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  get(property: "id"): string;

  /**
   * An image to be displayed on the button.
   */
  get(property: "image"): Image;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  get(property: "layoutData"): LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  get(property: "left"): margin;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  get(property: "opacity"): number;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  get(property: "right"): margin;

  /**
   * The button's label text.
   */
  get(property: "text"): string;

  /**
   * Text color of the widget.
   */
  get(property: "textColor"): Color;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  get(property: "top"): margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  get(property: "transform"): Transformation;

  /**
   * Whether the widget is visible.
   */
  get(property: "visible"): boolean;

  /**
   * The width of the widget.
   */
  get(property: "width"): dimension;

  /**
   * Sets the given property. Supports chaining.
   * @param property
   * @param value
   */
  set(property: string, value: any): this;

  /**
   * Sets all key-value pairs in the properties object as widget properties. Supports chaining.
   * @param properties
   */
  set(properties: ButtonProperties): this;

  /**
   * The horizontal alignment of the button text.
   */
  set(property: "alignment", value: string): this;
  set(property: "alignment", value: "center"): this;
  set(property: "alignment", value: "left"): this;
  set(property: "alignment", value: "right"): this;

  /**
   * Background color of the widget.
   */
  set(property: "background", value: Color): this;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  set(property: "backgroundImage", value: Image): this;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  set(property: "baseline", value: this): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  set(property: "bottom", value: margin): this;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  set(property: "bounds", value: Bounds): this;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  set(property: "centerX", value: offset): this;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  set(property: "centerY", value: offset): this;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  set(property: "class", value: string): this;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  set(property: "cornerRadius", value: number): this;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  set(property: "elevation", value: number): this;

  /**
   * Whether the widget can be operated.
   */
  set(property: "enabled", value: boolean): this;

  /**
   * The font used for the widget.
   */
  set(property: "font", value: Font): this;

  /**
   * The height of the widget.
   */
  set(property: "height", value: dimension): this;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  set(property: "highlightOnTouch", value: boolean): this;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  set(property: "id", value: string): this;

  /**
   * An image to be displayed on the button.
   */
  set(property: "image", value: Image): this;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  set(property: "layoutData", value: LayoutData): this;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  set(property: "left", value: margin): this;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  set(property: "opacity", value: number): this;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  set(property: "right", value: margin): this;

  /**
   * The button's label text.
   */
  set(property: "text", value: string): this;

  /**
   * Text color of the widget.
   */
  set(property: "textColor", value: Color): this;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  set(property: "top", value: margin): this;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  set(property: "transform", value: Transformation): this;

  /**
   * Whether the widget is visible.
   */
  set(property: "visible", value: boolean): this;

  /**
   * The width of the widget.
   */
  set(property: "width", value: dimension): this;
}

interface ButtonProperties extends WidgetProperties {

  /**
   * The horizontal alignment of the button text.
   */
  alignment?: string;

  /**
   * Background color of the widget.
   */
  background?: Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  backgroundImage?: Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  baseline?: this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  bottom?: margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  bounds?: Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  centerX?: offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  centerY?: offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  class?: string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  cornerRadius?: number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  elevation?: number;

  /**
   * Whether the widget can be operated.
   */
  enabled?: boolean;

  /**
   * The font used for the widget.
   */
  font?: Font;

  /**
   * The height of the widget.
   */
  height?: dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  highlightOnTouch?: boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  id?: string;

  /**
   * An image to be displayed on the button.
   */
  image?: Image;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  layoutData?: LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  left?: margin;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  opacity?: number;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  right?: margin;

  /**
   * The button's label text.
   */
  text?: string;

  /**
   * Text color of the widget.
   */
  textColor?: Color;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  top?: margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  transform?: Transformation;

  /**
   * Whether the widget is visible.
   */
  visible?: boolean;

  /**
   * The width of the widget.
   */
  width?: dimension;
}

// Canvas

/**
 * Canvas is a widget that can be used to draw graphics using a canvas context. Canvas context is a
 * subset of the HTML5
 * [CanvasRenderingContext2D](https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D).
 */
export class Canvas extends Composite {

  constructor(properties?: CanvasProperties);

  /**
   * Returns the drawing context with the given size.
   * @param contextType The context identifier. Only `"2d"` is currently supported.
   * @param width the width of the canvas context to create
   * @param height the height of the canvas context to create
   */
  getContext(contextType: string, width: number, height: number): CanvasContext;

  /**
   * Removes all occurrences of *listener* that are bound to *event* and *context* from this widget.
   * If the context parameter is not present, all matching listeners will be removed.
   * If the listener parameter is not present, all listeners that are bound to *event* will be removed.
   * If the event parameter is not present, all listeners for all events will be removed from this widget.
   * Supports chaining.
   * @param event
   * @param listener
   * @param context
   */
  off(event?: string, listener?: Function, context?: this): this;
  off(event: "addchild", listener?: Function, context?: this): this;
  off(event: "animationend", listener?: Function, context?: this): this;
  off(event: "animationstart", listener?: Function, context?: this): this;
  off(event: "change:{property}", listener?: Function, context?: this): this;
  off(event: "dispose", listener?: Function, context?: this): this;
  off(event: "longpress", listener?: Function, context?: this): this;
  off(event: "pan", listener?: Function, context?: this): this;
  off(event: "pan:down", listener?: Function, context?: this): this;
  off(event: "pan:left", listener?: Function, context?: this): this;
  off(event: "pan:right", listener?: Function, context?: this): this;
  off(event: "pan:up", listener?: Function, context?: this): this;
  off(event: "removechild", listener?: Function, context?: this): this;
  off(event: "resize", listener?: Function, context?: this): this;
  off(event: "swipe:down", listener?: Function, context?: this): this;
  off(event: "swipe:left", listener?: Function, context?: this): this;
  off(event: "swipe:right", listener?: Function, context?: this): this;
  off(event: "swipe:up", listener?: Function, context?: this): this;
  off(event: "tap", listener?: Function, context?: this): this;
  off(event: "touchcancel", listener?: Function, context?: this): this;
  off(event: "touchend", listener?: Function, context?: this): this;
  off(event: "touchmove", listener?: Function, context?: this): this;
  off(event: "touchstart", listener?: Function, context?: this): this;

  /**
   * Adds a *listener* to the list of functions to be notified when *event* is fired. If the context
   * parameter is not present, the listener will be called in the context of this object. Supports
   * chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  on(event: string, listener: Function, context?: this): this;
  on(event: "addchild", listener: (widget: this, child: Widget, options: any) => any): this;
  on(event: "animationend", listener: (widget: this, options: Object) => any): this;
  on(event: "animationstart", listener: (widget: this, options: Object) => any): this;
  on(event: "change:{property}", listener: (widget: this, value: any, options: Object) => any): this;
  on(event: "dispose", listener: (widget: this) => any): this;
  on(event: "longpress", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "removechild", listener: (widget: this, child: Widget, options: {index: number}) => any): this;
  on(event: "resize", listener: (widget: this, bounds: Bounds, options: Object) => any): this;
  on(event: "swipe:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "tap", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "touchcancel", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchend", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchmove", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchstart", listener: (widget: this, gesture: TouchEvent) => any): this;

  /**
   * Same as `on`, but removes the listener after it has been invoked by an event. Supports chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  once(event: string, listener: Function, context?: this): this;
  once(event: "addchild", listener: (widget: this, child: Widget, options: any, context?: this) => any): this;
  once(event: "animationend", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "animationstart", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "change:{property}", listener: (widget: this, value: any, options: Object, context?: this) => any): this;
  once(event: "dispose", listener: (widget: this, context?: this) => any): this;
  once(event: "longpress", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "removechild", listener: (widget: this, child: Widget, options: {index: number}, context?: this) => any): this;
  once(event: "resize", listener: (widget: this, bounds: Bounds, options: Object, context?: this) => any): this;
  once(event: "swipe:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "tap", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "touchcancel", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchend", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchmove", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchstart", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;

  /**
   * Triggers an event of the given type. All registered listeners will be notified. Additional parameters
   * will be passed to the listeners.
   * @param event
   * @param ...params
   */
  trigger(event: string, ...params: any[]): this;

  /**
   * Gets the current value of the given *property*.
   * @param property
   */
  get(property: string): any;

  /**
   * Background color of the widget.
   */
  get(property: "background"): Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  get(property: "backgroundImage"): Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  get(property: "baseline"): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  get(property: "bottom"): margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  get(property: "bounds"): Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  get(property: "centerX"): offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  get(property: "centerY"): offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  get(property: "class"): string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  get(property: "cornerRadius"): number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  get(property: "elevation"): number;

  /**
   * Whether the widget can be operated.
   */
  get(property: "enabled"): boolean;

  /**
   * The font used for the widget.
   */
  get(property: "font"): Font;

  /**
   * The height of the widget.
   */
  get(property: "height"): dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  get(property: "highlightOnTouch"): boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  get(property: "id"): string;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  get(property: "layoutData"): LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  get(property: "left"): margin;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  get(property: "opacity"): number;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  get(property: "right"): margin;

  /**
   * Text color of the widget.
   */
  get(property: "textColor"): Color;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  get(property: "top"): margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  get(property: "transform"): Transformation;

  /**
   * Whether the widget is visible.
   */
  get(property: "visible"): boolean;

  /**
   * The width of the widget.
   */
  get(property: "width"): dimension;

  /**
   * Sets the given property. Supports chaining.
   * @param property
   * @param value
   */
  set(property: string, value: any): this;

  /**
   * Sets all key-value pairs in the properties object as widget properties. Supports chaining.
   * @param properties
   */
  set(properties: CanvasProperties): this;

  /**
   * Background color of the widget.
   */
  set(property: "background", value: Color): this;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  set(property: "backgroundImage", value: Image): this;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  set(property: "baseline", value: this): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  set(property: "bottom", value: margin): this;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  set(property: "bounds", value: Bounds): this;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  set(property: "centerX", value: offset): this;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  set(property: "centerY", value: offset): this;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  set(property: "class", value: string): this;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  set(property: "cornerRadius", value: number): this;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  set(property: "elevation", value: number): this;

  /**
   * Whether the widget can be operated.
   */
  set(property: "enabled", value: boolean): this;

  /**
   * The font used for the widget.
   */
  set(property: "font", value: Font): this;

  /**
   * The height of the widget.
   */
  set(property: "height", value: dimension): this;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  set(property: "highlightOnTouch", value: boolean): this;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  set(property: "id", value: string): this;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  set(property: "layoutData", value: LayoutData): this;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  set(property: "left", value: margin): this;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  set(property: "opacity", value: number): this;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  set(property: "right", value: margin): this;

  /**
   * Text color of the widget.
   */
  set(property: "textColor", value: Color): this;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  set(property: "top", value: margin): this;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  set(property: "transform", value: Transformation): this;

  /**
   * Whether the widget is visible.
   */
  set(property: "visible", value: boolean): this;

  /**
   * The width of the widget.
   */
  set(property: "width", value: dimension): this;
}

interface CanvasProperties extends CompositeProperties {

  /**
   * Background color of the widget.
   */
  background?: Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  backgroundImage?: Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  baseline?: this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  bottom?: margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  bounds?: Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  centerX?: offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  centerY?: offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  class?: string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  cornerRadius?: number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  elevation?: number;

  /**
   * Whether the widget can be operated.
   */
  enabled?: boolean;

  /**
   * The font used for the widget.
   */
  font?: Font;

  /**
   * The height of the widget.
   */
  height?: dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  highlightOnTouch?: boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  id?: string;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  layoutData?: LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  left?: margin;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  opacity?: number;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  right?: margin;

  /**
   * Text color of the widget.
   */
  textColor?: Color;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  top?: margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  transform?: Transformation;

  /**
   * Whether the widget is visible.
   */
  visible?: boolean;

  /**
   * The width of the widget.
   */
  width?: dimension;
}

// Cell

/**
 * This widget represents a space in a *CollectionView* on which an item is displayed. Cell widgets are
 * not created by the application but by the *CollectionView* widget.
 */
export class Cell extends Composite {

  constructor(properties?: CellProperties);

  /**
   * Removes all occurrences of *listener* that are bound to *event* and *context* from this widget.
   * If the context parameter is not present, all matching listeners will be removed.
   * If the listener parameter is not present, all listeners that are bound to *event* will be removed.
   * If the event parameter is not present, all listeners for all events will be removed from this widget.
   * Supports chaining.
   * @param event
   * @param listener
   * @param context
   */
  off(event?: string, listener?: Function, context?: this): this;
  off(event: "addchild", listener?: Function, context?: this): this;
  off(event: "animationend", listener?: Function, context?: this): this;
  off(event: "animationstart", listener?: Function, context?: this): this;
  off(event: "change:item", listener?: Function, context?: this): this;
  off(event: "change:itemIndex", listener?: Function, context?: this): this;
  off(event: "change:{property}", listener?: Function, context?: this): this;
  off(event: "dispose", listener?: Function, context?: this): this;
  off(event: "longpress", listener?: Function, context?: this): this;
  off(event: "pan", listener?: Function, context?: this): this;
  off(event: "pan:down", listener?: Function, context?: this): this;
  off(event: "pan:left", listener?: Function, context?: this): this;
  off(event: "pan:right", listener?: Function, context?: this): this;
  off(event: "pan:up", listener?: Function, context?: this): this;
  off(event: "removechild", listener?: Function, context?: this): this;
  off(event: "resize", listener?: Function, context?: this): this;
  off(event: "swipe:down", listener?: Function, context?: this): this;
  off(event: "swipe:left", listener?: Function, context?: this): this;
  off(event: "swipe:right", listener?: Function, context?: this): this;
  off(event: "swipe:up", listener?: Function, context?: this): this;
  off(event: "tap", listener?: Function, context?: this): this;
  off(event: "touchcancel", listener?: Function, context?: this): this;
  off(event: "touchend", listener?: Function, context?: this): this;
  off(event: "touchmove", listener?: Function, context?: this): this;
  off(event: "touchstart", listener?: Function, context?: this): this;

  /**
   * Adds a *listener* to the list of functions to be notified when *event* is fired. If the context
   * parameter is not present, the listener will be called in the context of this object. Supports
   * chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  on(event: string, listener: Function, context?: this): this;
  on(event: "addchild", listener: (widget: this, child: Widget, options: any) => any): this;
  on(event: "animationend", listener: (widget: this, options: Object) => any): this;
  on(event: "animationstart", listener: (widget: this, options: Object) => any): this;
  on(event: "change:item", listener: (widget: this, item: any, options: any) => any): this;
  on(event: "change:itemIndex", listener: (widget: this, itemIndex: number, options: any) => any): this;
  on(event: "change:{property}", listener: (widget: this, value: any, options: Object) => any): this;
  on(event: "dispose", listener: (widget: this) => any): this;
  on(event: "longpress", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "removechild", listener: (widget: this, child: Widget, options: {index: number}) => any): this;
  on(event: "resize", listener: (widget: this, bounds: Bounds, options: Object) => any): this;
  on(event: "swipe:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "tap", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "touchcancel", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchend", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchmove", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchstart", listener: (widget: this, gesture: TouchEvent) => any): this;

  /**
   * Same as `on`, but removes the listener after it has been invoked by an event. Supports chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  once(event: string, listener: Function, context?: this): this;
  once(event: "addchild", listener: (widget: this, child: Widget, options: any, context?: this) => any): this;
  once(event: "animationend", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "animationstart", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "change:item", listener: (widget: this, item: any, options: any, context?: this) => any): this;
  once(event: "change:itemIndex", listener: (widget: this, itemIndex: number, options: any, context?: this) => any): this;
  once(event: "change:{property}", listener: (widget: this, value: any, options: Object, context?: this) => any): this;
  once(event: "dispose", listener: (widget: this, context?: this) => any): this;
  once(event: "longpress", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "removechild", listener: (widget: this, child: Widget, options: {index: number}, context?: this) => any): this;
  once(event: "resize", listener: (widget: this, bounds: Bounds, options: Object, context?: this) => any): this;
  once(event: "swipe:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "tap", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "touchcancel", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchend", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchmove", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchstart", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;

  /**
   * Triggers an event of the given type. All registered listeners will be notified. Additional parameters
   * will be passed to the listeners.
   * @param event
   * @param ...params
   */
  trigger(event: string, ...params: any[]): this;

  /**
   * Gets the current value of the given *property*.
   * @param property
   */
  get(property: string): any;

  /**
   * Background color of the widget.
   */
  get(property: "background"): Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  get(property: "backgroundImage"): Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  get(property: "baseline"): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  get(property: "bottom"): margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  get(property: "bounds"): Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  get(property: "centerX"): offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  get(property: "centerY"): offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  get(property: "class"): string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  get(property: "cornerRadius"): number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  get(property: "elevation"): number;

  /**
   * Whether the widget can be operated.
   */
  get(property: "enabled"): boolean;

  /**
   * The font used for the widget.
   */
  get(property: "font"): Font;

  /**
   * The height of the widget.
   */
  get(property: "height"): dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  get(property: "highlightOnTouch"): boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  get(property: "id"): string;

  /**
   * The item that is currently represented by this cell. This property is not set by the application but
   * by the *CollectionView* widget.
   */
  get(property: "item"): any;

  /**
   * The index of the item that is currently represented by this cell. This property is not set by the
   * application but by the *CollectionView* widget.
   */
  get(property: "itemIndex"): number;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  get(property: "layoutData"): LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  get(property: "left"): margin;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  get(property: "opacity"): number;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  get(property: "right"): margin;

  /**
   * Text color of the widget.
   */
  get(property: "textColor"): Color;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  get(property: "top"): margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  get(property: "transform"): Transformation;

  /**
   * Whether the widget is visible.
   */
  get(property: "visible"): boolean;

  /**
   * The width of the widget.
   */
  get(property: "width"): dimension;

  /**
   * Sets the given property. Supports chaining.
   * @param property
   * @param value
   */
  set(property: string, value: any): this;

  /**
   * Sets all key-value pairs in the properties object as widget properties. Supports chaining.
   * @param properties
   */
  set(properties: CellProperties): this;

  /**
   * Background color of the widget.
   */
  set(property: "background", value: Color): this;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  set(property: "backgroundImage", value: Image): this;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  set(property: "baseline", value: this): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  set(property: "bottom", value: margin): this;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  set(property: "bounds", value: Bounds): this;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  set(property: "centerX", value: offset): this;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  set(property: "centerY", value: offset): this;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  set(property: "class", value: string): this;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  set(property: "cornerRadius", value: number): this;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  set(property: "elevation", value: number): this;

  /**
   * Whether the widget can be operated.
   */
  set(property: "enabled", value: boolean): this;

  /**
   * The font used for the widget.
   */
  set(property: "font", value: Font): this;

  /**
   * The height of the widget.
   */
  set(property: "height", value: dimension): this;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  set(property: "highlightOnTouch", value: boolean): this;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  set(property: "id", value: string): this;

  /**
   * The item that is currently represented by this cell. This property is not set by the application but
   * by the *CollectionView* widget.
   */
  set(property: "item", value: any): this;

  /**
   * The index of the item that is currently represented by this cell. This property is not set by the
   * application but by the *CollectionView* widget.
   */
  set(property: "itemIndex", value: number): this;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  set(property: "layoutData", value: LayoutData): this;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  set(property: "left", value: margin): this;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  set(property: "opacity", value: number): this;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  set(property: "right", value: margin): this;

  /**
   * Text color of the widget.
   */
  set(property: "textColor", value: Color): this;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  set(property: "top", value: margin): this;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  set(property: "transform", value: Transformation): this;

  /**
   * Whether the widget is visible.
   */
  set(property: "visible", value: boolean): this;

  /**
   * The width of the widget.
   */
  set(property: "width", value: dimension): this;
}

interface CellProperties extends CompositeProperties {

  /**
   * Background color of the widget.
   */
  background?: Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  backgroundImage?: Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  baseline?: this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  bottom?: margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  bounds?: Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  centerX?: offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  centerY?: offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  class?: string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  cornerRadius?: number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  elevation?: number;

  /**
   * Whether the widget can be operated.
   */
  enabled?: boolean;

  /**
   * The font used for the widget.
   */
  font?: Font;

  /**
   * The height of the widget.
   */
  height?: dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  highlightOnTouch?: boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  id?: string;

  /**
   * The item that is currently represented by this cell. This property is not set by the application but
   * by the *CollectionView* widget.
   */
  item?: any;

  /**
   * The index of the item that is currently represented by this cell. This property is not set by the
   * application but by the *CollectionView* widget.
   */
  itemIndex?: number;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  layoutData?: LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  left?: margin;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  opacity?: number;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  right?: margin;

  /**
   * Text color of the widget.
   */
  textColor?: Color;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  top?: margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  transform?: Transformation;

  /**
   * Whether the widget is visible.
   */
  visible?: boolean;

  /**
   * The width of the widget.
   */
  width?: dimension;
}

// CheckBox

/**
 * A check box widget.
 */
export class CheckBox extends Widget {

  constructor(properties?: CheckBoxProperties);

  /**
   * Removes all occurrences of *listener* that are bound to *event* and *context* from this widget.
   * If the context parameter is not present, all matching listeners will be removed.
   * If the listener parameter is not present, all listeners that are bound to *event* will be removed.
   * If the event parameter is not present, all listeners for all events will be removed from this widget.
   * Supports chaining.
   * @param event
   * @param listener
   * @param context
   */
  off(event?: string, listener?: Function, context?: this): this;
  off(event: "animationend", listener?: Function, context?: this): this;
  off(event: "animationstart", listener?: Function, context?: this): this;
  off(event: "change:selection", listener?: Function, context?: this): this;
  off(event: "change:{property}", listener?: Function, context?: this): this;
  off(event: "dispose", listener?: Function, context?: this): this;
  off(event: "longpress", listener?: Function, context?: this): this;
  off(event: "pan", listener?: Function, context?: this): this;
  off(event: "pan:down", listener?: Function, context?: this): this;
  off(event: "pan:left", listener?: Function, context?: this): this;
  off(event: "pan:right", listener?: Function, context?: this): this;
  off(event: "pan:up", listener?: Function, context?: this): this;
  off(event: "resize", listener?: Function, context?: this): this;
  off(event: "select", listener?: Function, context?: this): this;
  off(event: "swipe:down", listener?: Function, context?: this): this;
  off(event: "swipe:left", listener?: Function, context?: this): this;
  off(event: "swipe:right", listener?: Function, context?: this): this;
  off(event: "swipe:up", listener?: Function, context?: this): this;
  off(event: "tap", listener?: Function, context?: this): this;
  off(event: "touchcancel", listener?: Function, context?: this): this;
  off(event: "touchend", listener?: Function, context?: this): this;
  off(event: "touchmove", listener?: Function, context?: this): this;
  off(event: "touchstart", listener?: Function, context?: this): this;

  /**
   * Adds a *listener* to the list of functions to be notified when *event* is fired. If the context
   * parameter is not present, the listener will be called in the context of this object. Supports
   * chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  on(event: string, listener: Function, context?: this): this;
  on(event: "animationend", listener: (widget: this, options: Object) => any): this;
  on(event: "animationstart", listener: (widget: this, options: Object) => any): this;
  on(event: "change:selection", listener: (widget: this, selection: boolean, options: any) => any): this;
  on(event: "change:{property}", listener: (widget: this, value: any, options: Object) => any): this;
  on(event: "dispose", listener: (widget: this) => any): this;
  on(event: "longpress", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "resize", listener: (widget: this, bounds: Bounds, options: Object) => any): this;
  on(event: "select", listener: (widget: this, selection: boolean, options: any) => any): this;
  on(event: "swipe:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "tap", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "touchcancel", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchend", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchmove", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchstart", listener: (widget: this, gesture: TouchEvent) => any): this;

  /**
   * Same as `on`, but removes the listener after it has been invoked by an event. Supports chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  once(event: string, listener: Function, context?: this): this;
  once(event: "animationend", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "animationstart", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "change:selection", listener: (widget: this, selection: boolean, options: any, context?: this) => any): this;
  once(event: "change:{property}", listener: (widget: this, value: any, options: Object, context?: this) => any): this;
  once(event: "dispose", listener: (widget: this, context?: this) => any): this;
  once(event: "longpress", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "resize", listener: (widget: this, bounds: Bounds, options: Object, context?: this) => any): this;
  once(event: "select", listener: (widget: this, selection: boolean, options: any, context?: this) => any): this;
  once(event: "swipe:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "tap", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "touchcancel", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchend", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchmove", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchstart", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;

  /**
   * Triggers an event of the given type. All registered listeners will be notified. Additional parameters
   * will be passed to the listeners.
   * @param event
   * @param ...params
   */
  trigger(event: string, ...params: any[]): this;

  /**
   * Gets the current value of the given *property*.
   * @param property
   */
  get(property: string): any;

  /**
   * Background color of the widget.
   */
  get(property: "background"): Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  get(property: "backgroundImage"): Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  get(property: "baseline"): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  get(property: "bottom"): margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  get(property: "bounds"): Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  get(property: "centerX"): offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  get(property: "centerY"): offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  get(property: "class"): string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  get(property: "cornerRadius"): number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  get(property: "elevation"): number;

  /**
   * Whether the widget can be operated.
   */
  get(property: "enabled"): boolean;

  /**
   * The font used for the widget.
   */
  get(property: "font"): Font;

  /**
   * The height of the widget.
   */
  get(property: "height"): dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  get(property: "highlightOnTouch"): boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  get(property: "id"): string;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  get(property: "layoutData"): LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  get(property: "left"): margin;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  get(property: "opacity"): number;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  get(property: "right"): margin;

  /**
   * The checked state of the check box.
   */
  get(property: "selection"): boolean;

  /**
   * The label text of the check box.
   */
  get(property: "text"): string;

  /**
   * Text color of the widget.
   */
  get(property: "textColor"): Color;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  get(property: "top"): margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  get(property: "transform"): Transformation;

  /**
   * Whether the widget is visible.
   */
  get(property: "visible"): boolean;

  /**
   * The width of the widget.
   */
  get(property: "width"): dimension;

  /**
   * Sets the given property. Supports chaining.
   * @param property
   * @param value
   */
  set(property: string, value: any): this;

  /**
   * Sets all key-value pairs in the properties object as widget properties. Supports chaining.
   * @param properties
   */
  set(properties: CheckBoxProperties): this;

  /**
   * Background color of the widget.
   */
  set(property: "background", value: Color): this;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  set(property: "backgroundImage", value: Image): this;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  set(property: "baseline", value: this): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  set(property: "bottom", value: margin): this;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  set(property: "bounds", value: Bounds): this;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  set(property: "centerX", value: offset): this;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  set(property: "centerY", value: offset): this;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  set(property: "class", value: string): this;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  set(property: "cornerRadius", value: number): this;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  set(property: "elevation", value: number): this;

  /**
   * Whether the widget can be operated.
   */
  set(property: "enabled", value: boolean): this;

  /**
   * The font used for the widget.
   */
  set(property: "font", value: Font): this;

  /**
   * The height of the widget.
   */
  set(property: "height", value: dimension): this;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  set(property: "highlightOnTouch", value: boolean): this;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  set(property: "id", value: string): this;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  set(property: "layoutData", value: LayoutData): this;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  set(property: "left", value: margin): this;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  set(property: "opacity", value: number): this;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  set(property: "right", value: margin): this;

  /**
   * The checked state of the check box.
   */
  set(property: "selection", value: boolean): this;

  /**
   * The label text of the check box.
   */
  set(property: "text", value: string): this;

  /**
   * Text color of the widget.
   */
  set(property: "textColor", value: Color): this;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  set(property: "top", value: margin): this;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  set(property: "transform", value: Transformation): this;

  /**
   * Whether the widget is visible.
   */
  set(property: "visible", value: boolean): this;

  /**
   * The width of the widget.
   */
  set(property: "width", value: dimension): this;
}

interface CheckBoxProperties extends WidgetProperties {

  /**
   * Background color of the widget.
   */
  background?: Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  backgroundImage?: Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  baseline?: this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  bottom?: margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  bounds?: Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  centerX?: offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  centerY?: offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  class?: string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  cornerRadius?: number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  elevation?: number;

  /**
   * Whether the widget can be operated.
   */
  enabled?: boolean;

  /**
   * The font used for the widget.
   */
  font?: Font;

  /**
   * The height of the widget.
   */
  height?: dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  highlightOnTouch?: boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  id?: string;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  layoutData?: LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  left?: margin;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  opacity?: number;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  right?: margin;

  /**
   * The checked state of the check box.
   */
  selection?: boolean;

  /**
   * The label text of the check box.
   */
  text?: string;

  /**
   * Text color of the widget.
   */
  textColor?: Color;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  top?: margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  transform?: Transformation;

  /**
   * Whether the widget is visible.
   */
  visible?: boolean;

  /**
   * The width of the widget.
   */
  width?: dimension;
}

// CollectionView

/**
 * A scrollable list that displays data items in cells, one per row. Cells are created on demand and
 * filled with widgets in the *initializeCell* callback.
 */
export class CollectionView extends Widget {

  constructor(properties?: CollectionViewProperties);

  /**
   * Inserts the given items into this view. Items are added at the end. This operation will modify the
   * *items* property.
   * @param items 
   */
  insert(items: any[]): void;

  /**
   * Inserts the given items into this view at the given index. This operation will modify the *items*
   * property.
   * @param items 
   * @param index The position to insert the items at. If a negative index is given, it is interpreted as relative to the end. If the given index is greater than the item count, new items will be appended at the end. 
   */
  insert(items: any[], index: number): void;

  /**
   * Triggers a refresh of all visible items. This will issue *change:item* events on the corresponding
   * cells.
   */
  refresh(): void;

  /**
   * Triggers a refresh of the item with the given index. If the item is scrolled into view, an
   * *change:item* event will be issued on the corresponding cell.
   * @param index The index of the item that was changed.
   */
  refresh(index: number): void;

  /**
   * Removes the item at the given index from this view. This operation will modify the *items* property.
   * @param index The index of the item to remove. If this is negative, it is interpreted as relative to the end.
   */
  remove(index: number): void;

  /**
   * Removes *count* items beginning with the given index from this view. This operation will modify the
   * *items* property.
   * @param index The index of the first item to remove. If this is negative, it is interpreted as relative to the end.
   * @param count The number of items to remove.
   */
  remove(index: number, count: number): void;

  /**
   * Scrolls the item with the given index into view.
   * @param index The index of the item to reveal. If this is negative, it is interpreted as relative to the end
   */
  reveal(index: number): void;

  /**
   * Removes all occurrences of *listener* that are bound to *event* and *context* from this widget.
   * If the context parameter is not present, all matching listeners will be removed.
   * If the listener parameter is not present, all listeners that are bound to *event* will be removed.
   * If the event parameter is not present, all listeners for all events will be removed from this widget.
   * Supports chaining.
   * @param event
   * @param listener
   * @param context
   */
  off(event?: string, listener?: Function, context?: this): this;
  off(event: "animationend", listener?: Function, context?: this): this;
  off(event: "animationstart", listener?: Function, context?: this): this;
  off(event: "change:{property}", listener?: Function, context?: this): this;
  off(event: "dispose", listener?: Function, context?: this): this;
  off(event: "longpress", listener?: Function, context?: this): this;
  off(event: "pan", listener?: Function, context?: this): this;
  off(event: "pan:down", listener?: Function, context?: this): this;
  off(event: "pan:left", listener?: Function, context?: this): this;
  off(event: "pan:right", listener?: Function, context?: this): this;
  off(event: "pan:up", listener?: Function, context?: this): this;
  off(event: "refresh", listener?: Function, context?: this): this;
  off(event: "resize", listener?: Function, context?: this): this;
  off(event: "scroll", listener?: Function, context?: this): this;
  off(event: "select", listener?: Function, context?: this): this;
  off(event: "swipe:down", listener?: Function, context?: this): this;
  off(event: "swipe:left", listener?: Function, context?: this): this;
  off(event: "swipe:right", listener?: Function, context?: this): this;
  off(event: "swipe:up", listener?: Function, context?: this): this;
  off(event: "tap", listener?: Function, context?: this): this;
  off(event: "touchcancel", listener?: Function, context?: this): this;
  off(event: "touchend", listener?: Function, context?: this): this;
  off(event: "touchmove", listener?: Function, context?: this): this;
  off(event: "touchstart", listener?: Function, context?: this): this;

  /**
   * Adds a *listener* to the list of functions to be notified when *event* is fired. If the context
   * parameter is not present, the listener will be called in the context of this object. Supports
   * chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  on(event: string, listener: Function, context?: this): this;
  on(event: "animationend", listener: (widget: this, options: Object) => any): this;
  on(event: "animationstart", listener: (widget: this, options: Object) => any): this;
  on(event: "change:{property}", listener: (widget: this, value: any, options: Object) => any): this;
  on(event: "dispose", listener: (widget: this) => any): this;
  on(event: "longpress", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "refresh", listener: (widget: this) => any): this;
  on(event: "resize", listener: (widget: this, bounds: Bounds, options: Object) => any): this;
  on(event: "scroll", listener: (widget: this, event: {deltaX: number, deltaY: number}) => any): this;
  on(event: "select", listener: (widget: this, item: any, options: {index: number}) => any): this;
  on(event: "swipe:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "tap", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "touchcancel", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchend", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchmove", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchstart", listener: (widget: this, gesture: TouchEvent) => any): this;

  /**
   * Same as `on`, but removes the listener after it has been invoked by an event. Supports chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  once(event: string, listener: Function, context?: this): this;
  once(event: "animationend", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "animationstart", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "change:{property}", listener: (widget: this, value: any, options: Object, context?: this) => any): this;
  once(event: "dispose", listener: (widget: this, context?: this) => any): this;
  once(event: "longpress", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "refresh", listener: (widget: this, context?: this) => any): this;
  once(event: "resize", listener: (widget: this, bounds: Bounds, options: Object, context?: this) => any): this;
  once(event: "scroll", listener: (widget: this, event: {deltaX: number, deltaY: number}, context?: this) => any): this;
  once(event: "select", listener: (widget: this, item: any, options: {index: number}, context?: this) => any): this;
  once(event: "swipe:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "tap", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "touchcancel", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchend", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchmove", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchstart", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;

  /**
   * Triggers an event of the given type. All registered listeners will be notified. Additional parameters
   * will be passed to the listeners.
   * @param event
   * @param ...params
   */
  trigger(event: string, ...params: any[]): this;

  /**
   * Gets the current value of the given *property*.
   * @param property
   */
  get(property: string): any;

  /**
   * Background color of the widget.
   */
  get(property: "background"): Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  get(property: "backgroundImage"): Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  get(property: "baseline"): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  get(property: "bottom"): margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  get(property: "bounds"): Bounds;

  /**
   * The name of the cell type to use for a given item. This name will be passed to the `initializeCell`
   * and `itemHeight` functions. Cells will be reused only by items that require the same cell type. If
   * set to a function, this function will be called for every item, providing the item as a parameter,
   * and must return a name for the cell type to use for the given item.
   */
  get(property: "cellType"): string|Function;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  get(property: "centerX"): offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  get(property: "centerY"): offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  get(property: "class"): string;

  /**
   * The number of columns to display in the collection view. If set to a value `n > 1`, each row will
   * contain `n` items. The available space will be equally distributed between columns.
   */
  get(property: "columnCount"): number;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  get(property: "cornerRadius"): number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  get(property: "elevation"): number;

  /**
   * Whether the widget can be operated.
   */
  get(property: "enabled"): boolean;

  /**
   * The first item that is currently visible on screen. This property is read-only.
   */
  get(property: "firstVisibleIndex"): number;

  /**
   * The font used for the widget.
   */
  get(property: "font"): Font;

  /**
   * The height of the widget.
   */
  get(property: "height"): dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  get(property: "highlightOnTouch"): boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  get(property: "id"): string;

  /**
   * A callback used to initialize a collection cell by attaching widget and *change:item* listener. Cells
   * are created by the framework and recycled on scrolling. This callback receives the cell as the first
   * and the cell type as second parameter.
   * @static
   */
  get(property: "initializeCell"): Function;

  /**
   * The height of a collection cell. If set to a function, this function will be called for every item,
   * providing the item and the cell type as parameters, and must return the item height for the given
   * item.
   */
  get(property: "itemHeight"): number|Function;

  /**
   * An array of data items to be displayed by the collection view. For dynamic content, use the methods
   * `insert` and `remove` instead of setting this property directly.
   */
  get(property: "items"): any[];

  /**
   * The last item that is currently visible on screen. This property is read-only.
   */
  get(property: "lastVisibleIndex"): number;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  get(property: "layoutData"): LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  get(property: "left"): margin;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  get(property: "opacity"): number;

  /**
   * Enables the user to trigger a refresh by using the pull-to-refresh gesture.
   */
  get(property: "refreshEnabled"): boolean;

  /**
   * Whether the refresh indicator is currently visible. Will be set to `true` when a *refresh* event is
   * triggered. Reset it to `false` when the refresh is finished.
   */
  get(property: "refreshIndicator"): boolean;

  /**
   * The message text displayed together with the refresh indicator. Currently not supported on Android.
   */
  get(property: "refreshMessage"): string;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  get(property: "right"): margin;

  /**
   * Text color of the widget.
   */
  get(property: "textColor"): Color;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  get(property: "top"): margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  get(property: "transform"): Transformation;

  /**
   * Whether the widget is visible.
   */
  get(property: "visible"): boolean;

  /**
   * The width of the widget.
   */
  get(property: "width"): dimension;

  /**
   * Sets the given property. Supports chaining.
   * @param property
   * @param value
   */
  set(property: string, value: any): this;

  /**
   * Sets all key-value pairs in the properties object as widget properties. Supports chaining.
   * @param properties
   */
  set(properties: CollectionViewProperties): this;

  /**
   * Background color of the widget.
   */
  set(property: "background", value: Color): this;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  set(property: "backgroundImage", value: Image): this;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  set(property: "baseline", value: this): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  set(property: "bottom", value: margin): this;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  set(property: "bounds", value: Bounds): this;

  /**
   * The name of the cell type to use for a given item. This name will be passed to the `initializeCell`
   * and `itemHeight` functions. Cells will be reused only by items that require the same cell type. If
   * set to a function, this function will be called for every item, providing the item as a parameter,
   * and must return a name for the cell type to use for the given item.
   */
  set(property: "cellType", value: string|Function): this;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  set(property: "centerX", value: offset): this;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  set(property: "centerY", value: offset): this;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  set(property: "class", value: string): this;

  /**
   * The number of columns to display in the collection view. If set to a value `n > 1`, each row will
   * contain `n` items. The available space will be equally distributed between columns.
   */
  set(property: "columnCount", value: number): this;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  set(property: "cornerRadius", value: number): this;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  set(property: "elevation", value: number): this;

  /**
   * Whether the widget can be operated.
   */
  set(property: "enabled", value: boolean): this;

  /**
   * The first item that is currently visible on screen. This property is read-only.
   */
  set(property: "firstVisibleIndex", value: number): this;

  /**
   * The font used for the widget.
   */
  set(property: "font", value: Font): this;

  /**
   * The height of the widget.
   */
  set(property: "height", value: dimension): this;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  set(property: "highlightOnTouch", value: boolean): this;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  set(property: "id", value: string): this;

  /**
   * A callback used to initialize a collection cell by attaching widget and *change:item* listener. Cells
   * are created by the framework and recycled on scrolling. This callback receives the cell as the first
   * and the cell type as second parameter.
   * @static
   */
  set(property: "initializeCell", value: Function): this;

  /**
   * The height of a collection cell. If set to a function, this function will be called for every item,
   * providing the item and the cell type as parameters, and must return the item height for the given
   * item.
   */
  set(property: "itemHeight", value: number|Function): this;

  /**
   * An array of data items to be displayed by the collection view. For dynamic content, use the methods
   * `insert` and `remove` instead of setting this property directly.
   */
  set(property: "items", value: any[]): this;

  /**
   * The last item that is currently visible on screen. This property is read-only.
   */
  set(property: "lastVisibleIndex", value: number): this;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  set(property: "layoutData", value: LayoutData): this;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  set(property: "left", value: margin): this;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  set(property: "opacity", value: number): this;

  /**
   * Enables the user to trigger a refresh by using the pull-to-refresh gesture.
   */
  set(property: "refreshEnabled", value: boolean): this;

  /**
   * Whether the refresh indicator is currently visible. Will be set to `true` when a *refresh* event is
   * triggered. Reset it to `false` when the refresh is finished.
   */
  set(property: "refreshIndicator", value: boolean): this;

  /**
   * The message text displayed together with the refresh indicator. Currently not supported on Android.
   */
  set(property: "refreshMessage", value: string): this;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  set(property: "right", value: margin): this;

  /**
   * Text color of the widget.
   */
  set(property: "textColor", value: Color): this;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  set(property: "top", value: margin): this;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  set(property: "transform", value: Transformation): this;

  /**
   * Whether the widget is visible.
   */
  set(property: "visible", value: boolean): this;

  /**
   * The width of the widget.
   */
  set(property: "width", value: dimension): this;
}

interface CollectionViewProperties extends WidgetProperties {

  /**
   * Background color of the widget.
   */
  background?: Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  backgroundImage?: Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  baseline?: this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  bottom?: margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  bounds?: Bounds;

  /**
   * The name of the cell type to use for a given item. This name will be passed to the `initializeCell`
   * and `itemHeight` functions. Cells will be reused only by items that require the same cell type. If
   * set to a function, this function will be called for every item, providing the item as a parameter,
   * and must return a name for the cell type to use for the given item.
   */
  cellType?: string|Function;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  centerX?: offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  centerY?: offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  class?: string;

  /**
   * The number of columns to display in the collection view. If set to a value `n > 1`, each row will
   * contain `n` items. The available space will be equally distributed between columns.
   */
  columnCount?: number;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  cornerRadius?: number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  elevation?: number;

  /**
   * Whether the widget can be operated.
   */
  enabled?: boolean;

  /**
   * The first item that is currently visible on screen. This property is read-only.
   */
  firstVisibleIndex?: number;

  /**
   * The font used for the widget.
   */
  font?: Font;

  /**
   * The height of the widget.
   */
  height?: dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  highlightOnTouch?: boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  id?: string;

  /**
   * A callback used to initialize a collection cell by attaching widget and *change:item* listener. Cells
   * are created by the framework and recycled on scrolling. This callback receives the cell as the first
   * and the cell type as second parameter.
   * @static
   */
  initializeCell?: Function;

  /**
   * The height of a collection cell. If set to a function, this function will be called for every item,
   * providing the item and the cell type as parameters, and must return the item height for the given
   * item.
   */
  itemHeight?: number|Function;

  /**
   * An array of data items to be displayed by the collection view. For dynamic content, use the methods
   * `insert` and `remove` instead of setting this property directly.
   */
  items?: any[];

  /**
   * The last item that is currently visible on screen. This property is read-only.
   */
  lastVisibleIndex?: number;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  layoutData?: LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  left?: margin;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  opacity?: number;

  /**
   * Enables the user to trigger a refresh by using the pull-to-refresh gesture.
   */
  refreshEnabled?: boolean;

  /**
   * Whether the refresh indicator is currently visible. Will be set to `true` when a *refresh* event is
   * triggered. Reset it to `false` when the refresh is finished.
   */
  refreshIndicator?: boolean;

  /**
   * The message text displayed together with the refresh indicator. Currently not supported on Android.
   */
  refreshMessage?: string;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  right?: margin;

  /**
   * Text color of the widget.
   */
  textColor?: Color;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  top?: margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  transform?: Transformation;

  /**
   * Whether the widget is visible.
   */
  visible?: boolean;

  /**
   * The width of the widget.
   */
  width?: dimension;
}

// Composite

/**
 * An empty widget that can contain other widgets.
 */
export class Composite extends Widget {

  constructor(properties?: CompositeProperties);

  /**
   * Adds the given widgets to the composite.
   * @param ...widgets 
   */
  append(...widgets: Widget[]): this;

  /**
   * Adds all widgets in the given array to the composite.
   * @param widgets 
   */
  append(widgets: Widget[]): this;

  /**
   * Adds all widgets in the given collection to the composite.
   * @param widgets 
   */
  append(widgets: WidgetCollection): this;

  /**
   * Removes all occurrences of *listener* that are bound to *event* and *context* from this widget.
   * If the context parameter is not present, all matching listeners will be removed.
   * If the listener parameter is not present, all listeners that are bound to *event* will be removed.
   * If the event parameter is not present, all listeners for all events will be removed from this widget.
   * Supports chaining.
   * @param event
   * @param listener
   * @param context
   */
  off(event?: string, listener?: Function, context?: this): this;
  off(event: "addchild", listener?: Function, context?: this): this;
  off(event: "animationend", listener?: Function, context?: this): this;
  off(event: "animationstart", listener?: Function, context?: this): this;
  off(event: "change:{property}", listener?: Function, context?: this): this;
  off(event: "dispose", listener?: Function, context?: this): this;
  off(event: "longpress", listener?: Function, context?: this): this;
  off(event: "pan", listener?: Function, context?: this): this;
  off(event: "pan:down", listener?: Function, context?: this): this;
  off(event: "pan:left", listener?: Function, context?: this): this;
  off(event: "pan:right", listener?: Function, context?: this): this;
  off(event: "pan:up", listener?: Function, context?: this): this;
  off(event: "removechild", listener?: Function, context?: this): this;
  off(event: "resize", listener?: Function, context?: this): this;
  off(event: "swipe:down", listener?: Function, context?: this): this;
  off(event: "swipe:left", listener?: Function, context?: this): this;
  off(event: "swipe:right", listener?: Function, context?: this): this;
  off(event: "swipe:up", listener?: Function, context?: this): this;
  off(event: "tap", listener?: Function, context?: this): this;
  off(event: "touchcancel", listener?: Function, context?: this): this;
  off(event: "touchend", listener?: Function, context?: this): this;
  off(event: "touchmove", listener?: Function, context?: this): this;
  off(event: "touchstart", listener?: Function, context?: this): this;

  /**
   * Adds a *listener* to the list of functions to be notified when *event* is fired. If the context
   * parameter is not present, the listener will be called in the context of this object. Supports
   * chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  on(event: string, listener: Function, context?: this): this;
  on(event: "addchild", listener: (widget: this, child: Widget, options: any) => any): this;
  on(event: "animationend", listener: (widget: this, options: Object) => any): this;
  on(event: "animationstart", listener: (widget: this, options: Object) => any): this;
  on(event: "change:{property}", listener: (widget: this, value: any, options: Object) => any): this;
  on(event: "dispose", listener: (widget: this) => any): this;
  on(event: "longpress", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "removechild", listener: (widget: this, child: Widget, options: {index: number}) => any): this;
  on(event: "resize", listener: (widget: this, bounds: Bounds, options: Object) => any): this;
  on(event: "swipe:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "tap", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "touchcancel", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchend", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchmove", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchstart", listener: (widget: this, gesture: TouchEvent) => any): this;

  /**
   * Same as `on`, but removes the listener after it has been invoked by an event. Supports chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  once(event: string, listener: Function, context?: this): this;
  once(event: "addchild", listener: (widget: this, child: Widget, options: any, context?: this) => any): this;
  once(event: "animationend", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "animationstart", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "change:{property}", listener: (widget: this, value: any, options: Object, context?: this) => any): this;
  once(event: "dispose", listener: (widget: this, context?: this) => any): this;
  once(event: "longpress", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "removechild", listener: (widget: this, child: Widget, options: {index: number}, context?: this) => any): this;
  once(event: "resize", listener: (widget: this, bounds: Bounds, options: Object, context?: this) => any): this;
  once(event: "swipe:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "tap", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "touchcancel", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchend", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchmove", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchstart", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;

  /**
   * Triggers an event of the given type. All registered listeners will be notified. Additional parameters
   * will be passed to the listeners.
   * @param event
   * @param ...params
   */
  trigger(event: string, ...params: any[]): this;

  /**
   * Gets the current value of the given *property*.
   * @param property
   */
  get(property: string): any;

  /**
   * Background color of the widget.
   */
  get(property: "background"): Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  get(property: "backgroundImage"): Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  get(property: "baseline"): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  get(property: "bottom"): margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  get(property: "bounds"): Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  get(property: "centerX"): offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  get(property: "centerY"): offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  get(property: "class"): string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  get(property: "cornerRadius"): number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  get(property: "elevation"): number;

  /**
   * Whether the widget can be operated.
   */
  get(property: "enabled"): boolean;

  /**
   * The font used for the widget.
   */
  get(property: "font"): Font;

  /**
   * The height of the widget.
   */
  get(property: "height"): dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  get(property: "highlightOnTouch"): boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  get(property: "id"): string;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  get(property: "layoutData"): LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  get(property: "left"): margin;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  get(property: "opacity"): number;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  get(property: "right"): margin;

  /**
   * Text color of the widget.
   */
  get(property: "textColor"): Color;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  get(property: "top"): margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  get(property: "transform"): Transformation;

  /**
   * Whether the widget is visible.
   */
  get(property: "visible"): boolean;

  /**
   * The width of the widget.
   */
  get(property: "width"): dimension;

  /**
   * Sets the given property. Supports chaining.
   * @param property
   * @param value
   */
  set(property: string, value: any): this;

  /**
   * Sets all key-value pairs in the properties object as widget properties. Supports chaining.
   * @param properties
   */
  set(properties: CompositeProperties): this;

  /**
   * Background color of the widget.
   */
  set(property: "background", value: Color): this;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  set(property: "backgroundImage", value: Image): this;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  set(property: "baseline", value: this): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  set(property: "bottom", value: margin): this;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  set(property: "bounds", value: Bounds): this;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  set(property: "centerX", value: offset): this;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  set(property: "centerY", value: offset): this;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  set(property: "class", value: string): this;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  set(property: "cornerRadius", value: number): this;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  set(property: "elevation", value: number): this;

  /**
   * Whether the widget can be operated.
   */
  set(property: "enabled", value: boolean): this;

  /**
   * The font used for the widget.
   */
  set(property: "font", value: Font): this;

  /**
   * The height of the widget.
   */
  set(property: "height", value: dimension): this;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  set(property: "highlightOnTouch", value: boolean): this;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  set(property: "id", value: string): this;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  set(property: "layoutData", value: LayoutData): this;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  set(property: "left", value: margin): this;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  set(property: "opacity", value: number): this;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  set(property: "right", value: margin): this;

  /**
   * Text color of the widget.
   */
  set(property: "textColor", value: Color): this;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  set(property: "top", value: margin): this;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  set(property: "transform", value: Transformation): this;

  /**
   * Whether the widget is visible.
   */
  set(property: "visible", value: boolean): this;

  /**
   * The width of the widget.
   */
  set(property: "width", value: dimension): this;
}

interface CompositeProperties extends WidgetProperties {

  /**
   * Background color of the widget.
   */
  background?: Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  backgroundImage?: Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  baseline?: this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  bottom?: margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  bounds?: Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  centerX?: offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  centerY?: offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  class?: string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  cornerRadius?: number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  elevation?: number;

  /**
   * Whether the widget can be operated.
   */
  enabled?: boolean;

  /**
   * The font used for the widget.
   */
  font?: Font;

  /**
   * The height of the widget.
   */
  height?: dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  highlightOnTouch?: boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  id?: string;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  layoutData?: LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  left?: margin;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  opacity?: number;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  right?: margin;

  /**
   * Text color of the widget.
   */
  textColor?: Color;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  top?: margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  transform?: Transformation;

  /**
   * Whether the widget is visible.
   */
  visible?: boolean;

  /**
   * The width of the widget.
   */
  width?: dimension;
}

// Drawer

/**
 * A navigation drawer that can be swiped in from the left edge of the screen. Can contain any kind of
 * widgets. It may be useful to include a `PageSelector` that displays all top-level pages.
 */
export class Drawer extends Composite {

  constructor(properties?: DrawerProperties);

  /**
   * Closes the drawer.
   */
  close(): this;

  /**
   * Opens the drawer.
   */
  open(): this;

  /**
   * Removes all occurrences of *listener* that are bound to *event* and *context* from this widget.
   * If the context parameter is not present, all matching listeners will be removed.
   * If the listener parameter is not present, all listeners that are bound to *event* will be removed.
   * If the event parameter is not present, all listeners for all events will be removed from this widget.
   * Supports chaining.
   * @param event
   * @param listener
   * @param context
   */
  off(event?: string, listener?: Function, context?: this): this;
  off(event: "addchild", listener?: Function, context?: this): this;
  off(event: "animationend", listener?: Function, context?: this): this;
  off(event: "animationstart", listener?: Function, context?: this): this;
  off(event: "change:{property}", listener?: Function, context?: this): this;
  off(event: "dispose", listener?: Function, context?: this): this;
  off(event: "longpress", listener?: Function, context?: this): this;
  off(event: "pan", listener?: Function, context?: this): this;
  off(event: "pan:down", listener?: Function, context?: this): this;
  off(event: "pan:left", listener?: Function, context?: this): this;
  off(event: "pan:right", listener?: Function, context?: this): this;
  off(event: "pan:up", listener?: Function, context?: this): this;
  off(event: "removechild", listener?: Function, context?: this): this;
  off(event: "resize", listener?: Function, context?: this): this;
  off(event: "swipe:down", listener?: Function, context?: this): this;
  off(event: "swipe:left", listener?: Function, context?: this): this;
  off(event: "swipe:right", listener?: Function, context?: this): this;
  off(event: "swipe:up", listener?: Function, context?: this): this;
  off(event: "tap", listener?: Function, context?: this): this;
  off(event: "touchcancel", listener?: Function, context?: this): this;
  off(event: "touchend", listener?: Function, context?: this): this;
  off(event: "touchmove", listener?: Function, context?: this): this;
  off(event: "touchstart", listener?: Function, context?: this): this;

  /**
   * Adds a *listener* to the list of functions to be notified when *event* is fired. If the context
   * parameter is not present, the listener will be called in the context of this object. Supports
   * chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  on(event: string, listener: Function, context?: this): this;
  on(event: "addchild", listener: (widget: this, child: Widget, options: any) => any): this;
  on(event: "animationend", listener: (widget: this, options: Object) => any): this;
  on(event: "animationstart", listener: (widget: this, options: Object) => any): this;
  on(event: "change:{property}", listener: (widget: this, value: any, options: Object) => any): this;
  on(event: "dispose", listener: (widget: this) => any): this;
  on(event: "longpress", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "removechild", listener: (widget: this, child: Widget, options: {index: number}) => any): this;
  on(event: "resize", listener: (widget: this, bounds: Bounds, options: Object) => any): this;
  on(event: "swipe:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "tap", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "touchcancel", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchend", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchmove", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchstart", listener: (widget: this, gesture: TouchEvent) => any): this;

  /**
   * Same as `on`, but removes the listener after it has been invoked by an event. Supports chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  once(event: string, listener: Function, context?: this): this;
  once(event: "addchild", listener: (widget: this, child: Widget, options: any, context?: this) => any): this;
  once(event: "animationend", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "animationstart", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "change:{property}", listener: (widget: this, value: any, options: Object, context?: this) => any): this;
  once(event: "dispose", listener: (widget: this, context?: this) => any): this;
  once(event: "longpress", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "removechild", listener: (widget: this, child: Widget, options: {index: number}, context?: this) => any): this;
  once(event: "resize", listener: (widget: this, bounds: Bounds, options: Object, context?: this) => any): this;
  once(event: "swipe:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "tap", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "touchcancel", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchend", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchmove", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchstart", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;

  /**
   * Triggers an event of the given type. All registered listeners will be notified. Additional parameters
   * will be passed to the listeners.
   * @param event
   * @param ...params
   */
  trigger(event: string, ...params: any[]): this;

  /**
   * Gets the current value of the given *property*.
   * @param property
   */
  get(property: string): any;

  /**
   * Background color of the widget.
   */
  get(property: "background"): Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  get(property: "backgroundImage"): Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  get(property: "baseline"): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  get(property: "bottom"): margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  get(property: "bounds"): Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  get(property: "centerX"): offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  get(property: "centerY"): offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  get(property: "class"): string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  get(property: "cornerRadius"): number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  get(property: "elevation"): number;

  /**
   * Whether the widget can be operated.
   */
  get(property: "enabled"): boolean;

  /**
   * The font used for the widget.
   */
  get(property: "font"): Font;

  /**
   * The height of the widget.
   */
  get(property: "height"): dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  get(property: "highlightOnTouch"): boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  get(property: "id"): string;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  get(property: "layoutData"): LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  get(property: "left"): margin;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  get(property: "opacity"): number;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  get(property: "right"): margin;

  /**
   * Text color of the widget.
   */
  get(property: "textColor"): Color;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  get(property: "top"): margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  get(property: "transform"): Transformation;

  /**
   * Whether the widget is visible.
   */
  get(property: "visible"): boolean;

  /**
   * The width of the widget.
   */
  get(property: "width"): dimension;

  /**
   * Sets the given property. Supports chaining.
   * @param property
   * @param value
   */
  set(property: string, value: any): this;

  /**
   * Sets all key-value pairs in the properties object as widget properties. Supports chaining.
   * @param properties
   */
  set(properties: DrawerProperties): this;

  /**
   * Background color of the widget.
   */
  set(property: "background", value: Color): this;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  set(property: "backgroundImage", value: Image): this;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  set(property: "baseline", value: this): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  set(property: "bottom", value: margin): this;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  set(property: "bounds", value: Bounds): this;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  set(property: "centerX", value: offset): this;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  set(property: "centerY", value: offset): this;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  set(property: "class", value: string): this;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  set(property: "cornerRadius", value: number): this;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  set(property: "elevation", value: number): this;

  /**
   * Whether the widget can be operated.
   */
  set(property: "enabled", value: boolean): this;

  /**
   * The font used for the widget.
   */
  set(property: "font", value: Font): this;

  /**
   * The height of the widget.
   */
  set(property: "height", value: dimension): this;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  set(property: "highlightOnTouch", value: boolean): this;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  set(property: "id", value: string): this;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  set(property: "layoutData", value: LayoutData): this;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  set(property: "left", value: margin): this;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  set(property: "opacity", value: number): this;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  set(property: "right", value: margin): this;

  /**
   * Text color of the widget.
   */
  set(property: "textColor", value: Color): this;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  set(property: "top", value: margin): this;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  set(property: "transform", value: Transformation): this;

  /**
   * Whether the widget is visible.
   */
  set(property: "visible", value: boolean): this;

  /**
   * The width of the widget.
   */
  set(property: "width", value: dimension): this;
}

interface DrawerProperties extends CompositeProperties {

  /**
   * Background color of the widget.
   */
  background?: Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  backgroundImage?: Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  baseline?: this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  bottom?: margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  bounds?: Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  centerX?: offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  centerY?: offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  class?: string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  cornerRadius?: number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  elevation?: number;

  /**
   * Whether the widget can be operated.
   */
  enabled?: boolean;

  /**
   * The font used for the widget.
   */
  font?: Font;

  /**
   * The height of the widget.
   */
  height?: dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  highlightOnTouch?: boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  id?: string;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  layoutData?: LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  left?: margin;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  opacity?: number;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  right?: margin;

  /**
   * Text color of the widget.
   */
  textColor?: Color;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  top?: margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  transform?: Transformation;

  /**
   * Whether the widget is visible.
   */
  visible?: boolean;

  /**
   * The width of the widget.
   */
  width?: dimension;
}

// ImageView

/**
 * A widget to display an image.
 */
export class ImageView extends Widget {

  constructor(properties?: ImageViewProperties);

  /**
   * Removes all occurrences of *listener* that are bound to *event* and *context* from this widget.
   * If the context parameter is not present, all matching listeners will be removed.
   * If the listener parameter is not present, all listeners that are bound to *event* will be removed.
   * If the event parameter is not present, all listeners for all events will be removed from this widget.
   * Supports chaining.
   * @param event
   * @param listener
   * @param context
   */
  off(event?: string, listener?: Function, context?: this): this;
  off(event: "animationend", listener?: Function, context?: this): this;
  off(event: "animationstart", listener?: Function, context?: this): this;
  off(event: "change:{property}", listener?: Function, context?: this): this;
  off(event: "dispose", listener?: Function, context?: this): this;
  off(event: "load", listener?: Function, context?: this): this;
  off(event: "longpress", listener?: Function, context?: this): this;
  off(event: "pan", listener?: Function, context?: this): this;
  off(event: "pan:down", listener?: Function, context?: this): this;
  off(event: "pan:left", listener?: Function, context?: this): this;
  off(event: "pan:right", listener?: Function, context?: this): this;
  off(event: "pan:up", listener?: Function, context?: this): this;
  off(event: "resize", listener?: Function, context?: this): this;
  off(event: "swipe:down", listener?: Function, context?: this): this;
  off(event: "swipe:left", listener?: Function, context?: this): this;
  off(event: "swipe:right", listener?: Function, context?: this): this;
  off(event: "swipe:up", listener?: Function, context?: this): this;
  off(event: "tap", listener?: Function, context?: this): this;
  off(event: "touchcancel", listener?: Function, context?: this): this;
  off(event: "touchend", listener?: Function, context?: this): this;
  off(event: "touchmove", listener?: Function, context?: this): this;
  off(event: "touchstart", listener?: Function, context?: this): this;

  /**
   * Adds a *listener* to the list of functions to be notified when *event* is fired. If the context
   * parameter is not present, the listener will be called in the context of this object. Supports
   * chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  on(event: string, listener: Function, context?: this): this;
  on(event: "animationend", listener: (widget: this, options: Object) => any): this;
  on(event: "animationstart", listener: (widget: this, options: Object) => any): this;
  on(event: "change:{property}", listener: (widget: this, value: any, options: Object) => any): this;
  on(event: "dispose", listener: (widget: this) => any): this;
  on(event: "load", listener: (widget: this, event: Object) => any): this;
  on(event: "longpress", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "resize", listener: (widget: this, bounds: Bounds, options: Object) => any): this;
  on(event: "swipe:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "tap", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "touchcancel", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchend", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchmove", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchstart", listener: (widget: this, gesture: TouchEvent) => any): this;

  /**
   * Same as `on`, but removes the listener after it has been invoked by an event. Supports chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  once(event: string, listener: Function, context?: this): this;
  once(event: "animationend", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "animationstart", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "change:{property}", listener: (widget: this, value: any, options: Object, context?: this) => any): this;
  once(event: "dispose", listener: (widget: this, context?: this) => any): this;
  once(event: "load", listener: (widget: this, event: Object, context?: this) => any): this;
  once(event: "longpress", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "resize", listener: (widget: this, bounds: Bounds, options: Object, context?: this) => any): this;
  once(event: "swipe:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "tap", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "touchcancel", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchend", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchmove", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchstart", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;

  /**
   * Triggers an event of the given type. All registered listeners will be notified. Additional parameters
   * will be passed to the listeners.
   * @param event
   * @param ...params
   */
  trigger(event: string, ...params: any[]): this;

  /**
   * Gets the current value of the given *property*.
   * @param property
   */
  get(property: string): any;

  /**
   * Background color of the widget.
   */
  get(property: "background"): Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  get(property: "backgroundImage"): Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  get(property: "baseline"): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  get(property: "bottom"): margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  get(property: "bounds"): Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  get(property: "centerX"): offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  get(property: "centerY"): offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  get(property: "class"): string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  get(property: "cornerRadius"): number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  get(property: "elevation"): number;

  /**
   * Whether the widget can be operated.
   */
  get(property: "enabled"): boolean;

  /**
   * The font used for the widget.
   */
  get(property: "font"): Font;

  /**
   * The height of the widget.
   */
  get(property: "height"): dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  get(property: "highlightOnTouch"): boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  get(property: "id"): string;

  /**
   * The image to display. Providing the `width` and `height` attributes on the image will resize it
   * internally. When no dimensions are given the image will be loaded with its original size. Since the
   * full size image might occupy a lot of memory, it's recommended to provide exact dimensions.
   */
  get(property: "image"): Image;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  get(property: "layoutData"): LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  get(property: "left"): margin;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  get(property: "opacity"): number;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  get(property: "right"): margin;

  /**
   * How to scale the image.
   * - `fit` will scale the image proportionally to fit into the view, possible leaving some empty space
   * at the edges. That is, the image will be displayed as large as possible while being fully contained
   * in the view.
   * - `fill` will scale the image proportionally to fill the entire view, possibly cutting off parts of
   * the image. That is, the image will be displayed as small as possible while covering the entire view.
   * - `auto` will scale *down* the image to *fit* into the view if it is too large, but it won't scale up
   * a smaller image.
   * - `stretch` will resize the image to the actual bounds of the image view.
   * - `none` will not resize the image at all. The image will be displayed in its original size.
   */
  get(property: "scaleMode"): string;

  /**
   * Text color of the widget.
   */
  get(property: "textColor"): Color;

  /**
   * A color to change the image appearance. All opaque parts of the image will be tinted with the given
   * color. Set to `null` to remove the effect.
   */
  get(property: "tintColor"): Color;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  get(property: "top"): margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  get(property: "transform"): Transformation;

  /**
   * Whether the widget is visible.
   */
  get(property: "visible"): boolean;

  /**
   * The width of the widget.
   */
  get(property: "width"): dimension;

  /**
   * Sets the given property. Supports chaining.
   * @param property
   * @param value
   */
  set(property: string, value: any): this;

  /**
   * Sets all key-value pairs in the properties object as widget properties. Supports chaining.
   * @param properties
   */
  set(properties: ImageViewProperties): this;

  /**
   * Background color of the widget.
   */
  set(property: "background", value: Color): this;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  set(property: "backgroundImage", value: Image): this;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  set(property: "baseline", value: this): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  set(property: "bottom", value: margin): this;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  set(property: "bounds", value: Bounds): this;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  set(property: "centerX", value: offset): this;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  set(property: "centerY", value: offset): this;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  set(property: "class", value: string): this;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  set(property: "cornerRadius", value: number): this;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  set(property: "elevation", value: number): this;

  /**
   * Whether the widget can be operated.
   */
  set(property: "enabled", value: boolean): this;

  /**
   * The font used for the widget.
   */
  set(property: "font", value: Font): this;

  /**
   * The height of the widget.
   */
  set(property: "height", value: dimension): this;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  set(property: "highlightOnTouch", value: boolean): this;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  set(property: "id", value: string): this;

  /**
   * The image to display. Providing the `width` and `height` attributes on the image will resize it
   * internally. When no dimensions are given the image will be loaded with its original size. Since the
   * full size image might occupy a lot of memory, it's recommended to provide exact dimensions.
   */
  set(property: "image", value: Image): this;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  set(property: "layoutData", value: LayoutData): this;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  set(property: "left", value: margin): this;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  set(property: "opacity", value: number): this;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  set(property: "right", value: margin): this;

  /**
   * How to scale the image.
   * - `fit` will scale the image proportionally to fit into the view, possible leaving some empty space
   * at the edges. That is, the image will be displayed as large as possible while being fully contained
   * in the view.
   * - `fill` will scale the image proportionally to fill the entire view, possibly cutting off parts of
   * the image. That is, the image will be displayed as small as possible while covering the entire view.
   * - `auto` will scale *down* the image to *fit* into the view if it is too large, but it won't scale up
   * a smaller image.
   * - `stretch` will resize the image to the actual bounds of the image view.
   * - `none` will not resize the image at all. The image will be displayed in its original size.
   */
  set(property: "scaleMode", value: string): this;
  set(property: "scaleMode", value: "auto"): this;
  set(property: "scaleMode", value: "fill"): this;
  set(property: "scaleMode", value: "fit"): this;
  set(property: "scaleMode", value: "none"): this;
  set(property: "scaleMode", value: "stretch"): this;

  /**
   * Text color of the widget.
   */
  set(property: "textColor", value: Color): this;

  /**
   * A color to change the image appearance. All opaque parts of the image will be tinted with the given
   * color. Set to `null` to remove the effect.
   */
  set(property: "tintColor", value: Color): this;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  set(property: "top", value: margin): this;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  set(property: "transform", value: Transformation): this;

  /**
   * Whether the widget is visible.
   */
  set(property: "visible", value: boolean): this;

  /**
   * The width of the widget.
   */
  set(property: "width", value: dimension): this;
}

interface ImageViewProperties extends WidgetProperties {

  /**
   * Background color of the widget.
   */
  background?: Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  backgroundImage?: Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  baseline?: this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  bottom?: margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  bounds?: Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  centerX?: offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  centerY?: offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  class?: string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  cornerRadius?: number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  elevation?: number;

  /**
   * Whether the widget can be operated.
   */
  enabled?: boolean;

  /**
   * The font used for the widget.
   */
  font?: Font;

  /**
   * The height of the widget.
   */
  height?: dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  highlightOnTouch?: boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  id?: string;

  /**
   * The image to display. Providing the `width` and `height` attributes on the image will resize it
   * internally. When no dimensions are given the image will be loaded with its original size. Since the
   * full size image might occupy a lot of memory, it's recommended to provide exact dimensions.
   */
  image?: Image;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  layoutData?: LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  left?: margin;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  opacity?: number;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  right?: margin;

  /**
   * How to scale the image.
   * - `fit` will scale the image proportionally to fit into the view, possible leaving some empty space
   * at the edges. That is, the image will be displayed as large as possible while being fully contained
   * in the view.
   * - `fill` will scale the image proportionally to fill the entire view, possibly cutting off parts of
   * the image. That is, the image will be displayed as small as possible while covering the entire view.
   * - `auto` will scale *down* the image to *fit* into the view if it is too large, but it won't scale up
   * a smaller image.
   * - `stretch` will resize the image to the actual bounds of the image view.
   * - `none` will not resize the image at all. The image will be displayed in its original size.
   */
  scaleMode?: string;

  /**
   * Text color of the widget.
   */
  textColor?: Color;

  /**
   * A color to change the image appearance. All opaque parts of the image will be tinted with the given
   * color. Set to `null` to remove the effect.
   */
  tintColor?: Color;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  top?: margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  transform?: Transformation;

  /**
   * Whether the widget is visible.
   */
  visible?: boolean;

  /**
   * The width of the widget.
   */
  width?: dimension;
}

// Page

/**
 * Pages contain an application's UI. Top-level pages can have a stack of non-top-level pages on top.
 * See [Widget Tree](../ui)
 */
export class Page extends Composite {

  constructor(properties?: PageProperties);

  /**
   * Closes and disposes of the page.
   */
  close(): void;

  /**
   * Opens the page, i.e. makes it the active page.
   */
  open(): this;

  /**
   * Removes all occurrences of *listener* that are bound to *event* and *context* from this widget.
   * If the context parameter is not present, all matching listeners will be removed.
   * If the listener parameter is not present, all listeners that are bound to *event* will be removed.
   * If the event parameter is not present, all listeners for all events will be removed from this widget.
   * Supports chaining.
   * @param event
   * @param listener
   * @param context
   */
  off(event?: string, listener?: Function, context?: this): this;
  off(event: "addchild", listener?: Function, context?: this): this;
  off(event: "animationend", listener?: Function, context?: this): this;
  off(event: "animationstart", listener?: Function, context?: this): this;
  off(event: "appear", listener?: Function, context?: this): this;
  off(event: "change:{property}", listener?: Function, context?: this): this;
  off(event: "disappear", listener?: Function, context?: this): this;
  off(event: "dispose", listener?: Function, context?: this): this;
  off(event: "longpress", listener?: Function, context?: this): this;
  off(event: "pan", listener?: Function, context?: this): this;
  off(event: "pan:down", listener?: Function, context?: this): this;
  off(event: "pan:left", listener?: Function, context?: this): this;
  off(event: "pan:right", listener?: Function, context?: this): this;
  off(event: "pan:up", listener?: Function, context?: this): this;
  off(event: "removechild", listener?: Function, context?: this): this;
  off(event: "resize", listener?: Function, context?: this): this;
  off(event: "swipe:down", listener?: Function, context?: this): this;
  off(event: "swipe:left", listener?: Function, context?: this): this;
  off(event: "swipe:right", listener?: Function, context?: this): this;
  off(event: "swipe:up", listener?: Function, context?: this): this;
  off(event: "tap", listener?: Function, context?: this): this;
  off(event: "touchcancel", listener?: Function, context?: this): this;
  off(event: "touchend", listener?: Function, context?: this): this;
  off(event: "touchmove", listener?: Function, context?: this): this;
  off(event: "touchstart", listener?: Function, context?: this): this;

  /**
   * Adds a *listener* to the list of functions to be notified when *event* is fired. If the context
   * parameter is not present, the listener will be called in the context of this object. Supports
   * chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  on(event: string, listener: Function, context?: this): this;
  on(event: "addchild", listener: (widget: this, child: Widget, options: any) => any): this;
  on(event: "animationend", listener: (widget: this, options: Object) => any): this;
  on(event: "animationstart", listener: (widget: this, options: Object) => any): this;
  on(event: "appear", listener: (widget: this) => any): this;
  on(event: "change:{property}", listener: (widget: this, value: any, options: Object) => any): this;
  on(event: "disappear", listener: (widget: this) => any): this;
  on(event: "dispose", listener: (widget: this) => any): this;
  on(event: "longpress", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "removechild", listener: (widget: this, child: Widget, options: {index: number}) => any): this;
  on(event: "resize", listener: (widget: this, bounds: Bounds, options: Object) => any): this;
  on(event: "swipe:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "tap", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "touchcancel", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchend", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchmove", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchstart", listener: (widget: this, gesture: TouchEvent) => any): this;

  /**
   * Same as `on`, but removes the listener after it has been invoked by an event. Supports chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  once(event: string, listener: Function, context?: this): this;
  once(event: "addchild", listener: (widget: this, child: Widget, options: any, context?: this) => any): this;
  once(event: "animationend", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "animationstart", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "appear", listener: (widget: this, context?: this) => any): this;
  once(event: "change:{property}", listener: (widget: this, value: any, options: Object, context?: this) => any): this;
  once(event: "disappear", listener: (widget: this, context?: this) => any): this;
  once(event: "dispose", listener: (widget: this, context?: this) => any): this;
  once(event: "longpress", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "removechild", listener: (widget: this, child: Widget, options: {index: number}, context?: this) => any): this;
  once(event: "resize", listener: (widget: this, bounds: Bounds, options: Object, context?: this) => any): this;
  once(event: "swipe:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "tap", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "touchcancel", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchend", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchmove", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchstart", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;

  /**
   * Triggers an event of the given type. All registered listeners will be notified. Additional parameters
   * will be passed to the listeners.
   * @param event
   * @param ...params
   */
  trigger(event: string, ...params: any[]): this;

  /**
   * Gets the current value of the given *property*.
   * @param property
   */
  get(property: string): any;

  /**
   * Background color of the widget.
   */
  get(property: "background"): Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  get(property: "backgroundImage"): Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  get(property: "baseline"): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  get(property: "bottom"): margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  get(property: "bounds"): Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  get(property: "centerX"): offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  get(property: "centerY"): offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  get(property: "class"): string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  get(property: "cornerRadius"): number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  get(property: "elevation"): number;

  /**
   * Whether the widget can be operated.
   */
  get(property: "enabled"): boolean;

  /**
   * The font used for the widget.
   */
  get(property: "font"): Font;

  /**
   * The height of the widget.
   */
  get(property: "height"): dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  get(property: "highlightOnTouch"): boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  get(property: "id"): string;

  /**
   * An image to be displayed in the navigation bar. Not supported anymore, don't use it.
   */
  get(property: "image"): Image;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  get(property: "layoutData"): LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  get(property: "left"): margin;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  get(property: "opacity"): number;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  get(property: "right"): margin;

  /**
   * Text color of the widget.
   */
  get(property: "textColor"): Color;

  /**
   * The page title to be displayed in the navigation bar.
   */
  get(property: "title"): string;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  get(property: "top"): margin;

  /**
   * Defines whether this is a top level page.
   */
  get(property: "topLevel"): boolean;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  get(property: "transform"): Transformation;

  /**
   * Whether the widget is visible.
   */
  get(property: "visible"): boolean;

  /**
   * The width of the widget.
   */
  get(property: "width"): dimension;

  /**
   * Sets the given property. Supports chaining.
   * @param property
   * @param value
   */
  set(property: string, value: any): this;

  /**
   * Sets all key-value pairs in the properties object as widget properties. Supports chaining.
   * @param properties
   */
  set(properties: PageProperties): this;

  /**
   * Background color of the widget.
   */
  set(property: "background", value: Color): this;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  set(property: "backgroundImage", value: Image): this;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  set(property: "baseline", value: this): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  set(property: "bottom", value: margin): this;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  set(property: "bounds", value: Bounds): this;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  set(property: "centerX", value: offset): this;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  set(property: "centerY", value: offset): this;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  set(property: "class", value: string): this;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  set(property: "cornerRadius", value: number): this;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  set(property: "elevation", value: number): this;

  /**
   * Whether the widget can be operated.
   */
  set(property: "enabled", value: boolean): this;

  /**
   * The font used for the widget.
   */
  set(property: "font", value: Font): this;

  /**
   * The height of the widget.
   */
  set(property: "height", value: dimension): this;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  set(property: "highlightOnTouch", value: boolean): this;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  set(property: "id", value: string): this;

  /**
   * An image to be displayed in the navigation bar. Not supported anymore, don't use it.
   */
  set(property: "image", value: Image): this;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  set(property: "layoutData", value: LayoutData): this;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  set(property: "left", value: margin): this;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  set(property: "opacity", value: number): this;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  set(property: "right", value: margin): this;

  /**
   * Text color of the widget.
   */
  set(property: "textColor", value: Color): this;

  /**
   * The page title to be displayed in the navigation bar.
   */
  set(property: "title", value: string): this;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  set(property: "top", value: margin): this;

  /**
   * Defines whether this is a top level page.
   */
  set(property: "topLevel", value: boolean): this;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  set(property: "transform", value: Transformation): this;

  /**
   * Whether the widget is visible.
   */
  set(property: "visible", value: boolean): this;

  /**
   * The width of the widget.
   */
  set(property: "width", value: dimension): this;
}

interface PageProperties extends CompositeProperties {

  /**
   * Background color of the widget.
   */
  background?: Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  backgroundImage?: Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  baseline?: this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  bottom?: margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  bounds?: Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  centerX?: offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  centerY?: offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  class?: string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  cornerRadius?: number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  elevation?: number;

  /**
   * Whether the widget can be operated.
   */
  enabled?: boolean;

  /**
   * The font used for the widget.
   */
  font?: Font;

  /**
   * The height of the widget.
   */
  height?: dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  highlightOnTouch?: boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  id?: string;

  /**
   * An image to be displayed in the navigation bar. Not supported anymore, don't use it.
   */
  image?: Image;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  layoutData?: LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  left?: margin;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  opacity?: number;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  right?: margin;

  /**
   * Text color of the widget.
   */
  textColor?: Color;

  /**
   * The page title to be displayed in the navigation bar.
   */
  title?: string;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  top?: margin;

  /**
   * Defines whether this is a top level page.
   */
  topLevel?: boolean;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  transform?: Transformation;

  /**
   * Whether the widget is visible.
   */
  visible?: boolean;

  /**
   * The width of the widget.
   */
  width?: dimension;
}

// PageSelector

/**
 * A CollectionView that contains all top-level pages and allows to open them. New top-level pages are
 * added dynamically.
 */
export class PageSelector extends CollectionView {

  constructor(properties?: PageSelectorProperties);

  /**
   * Removes all occurrences of *listener* that are bound to *event* and *context* from this widget.
   * If the context parameter is not present, all matching listeners will be removed.
   * If the listener parameter is not present, all listeners that are bound to *event* will be removed.
   * If the event parameter is not present, all listeners for all events will be removed from this widget.
   * Supports chaining.
   * @param event
   * @param listener
   * @param context
   */
  off(event?: string, listener?: Function, context?: this): this;
  off(event: "animationend", listener?: Function, context?: this): this;
  off(event: "animationstart", listener?: Function, context?: this): this;
  off(event: "change:{property}", listener?: Function, context?: this): this;
  off(event: "dispose", listener?: Function, context?: this): this;
  off(event: "longpress", listener?: Function, context?: this): this;
  off(event: "pan", listener?: Function, context?: this): this;
  off(event: "pan:down", listener?: Function, context?: this): this;
  off(event: "pan:left", listener?: Function, context?: this): this;
  off(event: "pan:right", listener?: Function, context?: this): this;
  off(event: "pan:up", listener?: Function, context?: this): this;
  off(event: "refresh", listener?: Function, context?: this): this;
  off(event: "resize", listener?: Function, context?: this): this;
  off(event: "scroll", listener?: Function, context?: this): this;
  off(event: "select", listener?: Function, context?: this): this;
  off(event: "swipe:down", listener?: Function, context?: this): this;
  off(event: "swipe:left", listener?: Function, context?: this): this;
  off(event: "swipe:right", listener?: Function, context?: this): this;
  off(event: "swipe:up", listener?: Function, context?: this): this;
  off(event: "tap", listener?: Function, context?: this): this;
  off(event: "touchcancel", listener?: Function, context?: this): this;
  off(event: "touchend", listener?: Function, context?: this): this;
  off(event: "touchmove", listener?: Function, context?: this): this;
  off(event: "touchstart", listener?: Function, context?: this): this;

  /**
   * Adds a *listener* to the list of functions to be notified when *event* is fired. If the context
   * parameter is not present, the listener will be called in the context of this object. Supports
   * chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  on(event: string, listener: Function, context?: this): this;
  on(event: "animationend", listener: (widget: this, options: Object) => any): this;
  on(event: "animationstart", listener: (widget: this, options: Object) => any): this;
  on(event: "change:{property}", listener: (widget: this, value: any, options: Object) => any): this;
  on(event: "dispose", listener: (widget: this) => any): this;
  on(event: "longpress", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "refresh", listener: (widget: this) => any): this;
  on(event: "resize", listener: (widget: this, bounds: Bounds, options: Object) => any): this;
  on(event: "scroll", listener: (widget: this, event: {deltaX: number, deltaY: number}) => any): this;
  on(event: "select", listener: (widget: this, item: any, options: {index: number}) => any): this;
  on(event: "swipe:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "tap", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "touchcancel", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchend", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchmove", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchstart", listener: (widget: this, gesture: TouchEvent) => any): this;

  /**
   * Same as `on`, but removes the listener after it has been invoked by an event. Supports chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  once(event: string, listener: Function, context?: this): this;
  once(event: "animationend", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "animationstart", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "change:{property}", listener: (widget: this, value: any, options: Object, context?: this) => any): this;
  once(event: "dispose", listener: (widget: this, context?: this) => any): this;
  once(event: "longpress", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "refresh", listener: (widget: this, context?: this) => any): this;
  once(event: "resize", listener: (widget: this, bounds: Bounds, options: Object, context?: this) => any): this;
  once(event: "scroll", listener: (widget: this, event: {deltaX: number, deltaY: number}, context?: this) => any): this;
  once(event: "select", listener: (widget: this, item: any, options: {index: number}, context?: this) => any): this;
  once(event: "swipe:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "tap", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "touchcancel", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchend", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchmove", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchstart", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;

  /**
   * Triggers an event of the given type. All registered listeners will be notified. Additional parameters
   * will be passed to the listeners.
   * @param event
   * @param ...params
   */
  trigger(event: string, ...params: any[]): this;

  /**
   * Gets the current value of the given *property*.
   * @param property
   */
  get(property: string): any;

  /**
   * Background color of the widget.
   */
  get(property: "background"): Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  get(property: "backgroundImage"): Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  get(property: "baseline"): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  get(property: "bottom"): margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  get(property: "bounds"): Bounds;

  /**
   * The name of the cell type to use for a given item. This name will be passed to the `initializeCell`
   * and `itemHeight` functions. Cells will be reused only by items that require the same cell type. If
   * set to a function, this function will be called for every item, providing the item as a parameter,
   * and must return a name for the cell type to use for the given item.
   */
  get(property: "cellType"): string|Function;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  get(property: "centerX"): offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  get(property: "centerY"): offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  get(property: "class"): string;

  /**
   * The number of columns to display in the collection view. If set to a value `n > 1`, each row will
   * contain `n` items. The available space will be equally distributed between columns.
   */
  get(property: "columnCount"): number;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  get(property: "cornerRadius"): number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  get(property: "elevation"): number;

  /**
   * Whether the widget can be operated.
   */
  get(property: "enabled"): boolean;

  /**
   * The first item that is currently visible on screen. This property is read-only.
   */
  get(property: "firstVisibleIndex"): number;

  /**
   * The font used for the widget.
   */
  get(property: "font"): Font;

  /**
   * The height of the widget.
   */
  get(property: "height"): dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  get(property: "highlightOnTouch"): boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  get(property: "id"): string;

  /**
   * A callback used to initialize a collection cell by attaching widget and *change:item* listener. Cells
   * are created by the framework and recycled on scrolling. This callback receives the cell as the first
   * and the cell type as second parameter.
   * @static
   */
  get(property: "initializeCell"): Function;

  /**
   * The height of a collection cell. If set to a function, this function will be called for every item,
   * providing the item and the cell type as parameters, and must return the item height for the given
   * item.
   */
  get(property: "itemHeight"): number|Function;

  /**
   * An array of data items to be displayed by the collection view. For dynamic content, use the methods
   * `insert` and `remove` instead of setting this property directly.
   */
  get(property: "items"): any[];

  /**
   * The last item that is currently visible on screen. This property is read-only.
   */
  get(property: "lastVisibleIndex"): number;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  get(property: "layoutData"): LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  get(property: "left"): margin;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  get(property: "opacity"): number;

  /**
   * Enables the user to trigger a refresh by using the pull-to-refresh gesture.
   */
  get(property: "refreshEnabled"): boolean;

  /**
   * Whether the refresh indicator is currently visible. Will be set to `true` when a *refresh* event is
   * triggered. Reset it to `false` when the refresh is finished.
   */
  get(property: "refreshIndicator"): boolean;

  /**
   * The message text displayed together with the refresh indicator. Currently not supported on Android.
   */
  get(property: "refreshMessage"): string;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  get(property: "right"): margin;

  /**
   * Text color of the widget.
   */
  get(property: "textColor"): Color;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  get(property: "top"): margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  get(property: "transform"): Transformation;

  /**
   * Whether the widget is visible.
   */
  get(property: "visible"): boolean;

  /**
   * The width of the widget.
   */
  get(property: "width"): dimension;

  /**
   * Sets the given property. Supports chaining.
   * @param property
   * @param value
   */
  set(property: string, value: any): this;

  /**
   * Sets all key-value pairs in the properties object as widget properties. Supports chaining.
   * @param properties
   */
  set(properties: PageSelectorProperties): this;

  /**
   * Background color of the widget.
   */
  set(property: "background", value: Color): this;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  set(property: "backgroundImage", value: Image): this;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  set(property: "baseline", value: this): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  set(property: "bottom", value: margin): this;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  set(property: "bounds", value: Bounds): this;

  /**
   * The name of the cell type to use for a given item. This name will be passed to the `initializeCell`
   * and `itemHeight` functions. Cells will be reused only by items that require the same cell type. If
   * set to a function, this function will be called for every item, providing the item as a parameter,
   * and must return a name for the cell type to use for the given item.
   */
  set(property: "cellType", value: string|Function): this;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  set(property: "centerX", value: offset): this;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  set(property: "centerY", value: offset): this;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  set(property: "class", value: string): this;

  /**
   * The number of columns to display in the collection view. If set to a value `n > 1`, each row will
   * contain `n` items. The available space will be equally distributed between columns.
   */
  set(property: "columnCount", value: number): this;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  set(property: "cornerRadius", value: number): this;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  set(property: "elevation", value: number): this;

  /**
   * Whether the widget can be operated.
   */
  set(property: "enabled", value: boolean): this;

  /**
   * The first item that is currently visible on screen. This property is read-only.
   */
  set(property: "firstVisibleIndex", value: number): this;

  /**
   * The font used for the widget.
   */
  set(property: "font", value: Font): this;

  /**
   * The height of the widget.
   */
  set(property: "height", value: dimension): this;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  set(property: "highlightOnTouch", value: boolean): this;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  set(property: "id", value: string): this;

  /**
   * A callback used to initialize a collection cell by attaching widget and *change:item* listener. Cells
   * are created by the framework and recycled on scrolling. This callback receives the cell as the first
   * and the cell type as second parameter.
   * @static
   */
  set(property: "initializeCell", value: Function): this;

  /**
   * The height of a collection cell. If set to a function, this function will be called for every item,
   * providing the item and the cell type as parameters, and must return the item height for the given
   * item.
   */
  set(property: "itemHeight", value: number|Function): this;

  /**
   * An array of data items to be displayed by the collection view. For dynamic content, use the methods
   * `insert` and `remove` instead of setting this property directly.
   */
  set(property: "items", value: any[]): this;

  /**
   * The last item that is currently visible on screen. This property is read-only.
   */
  set(property: "lastVisibleIndex", value: number): this;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  set(property: "layoutData", value: LayoutData): this;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  set(property: "left", value: margin): this;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  set(property: "opacity", value: number): this;

  /**
   * Enables the user to trigger a refresh by using the pull-to-refresh gesture.
   */
  set(property: "refreshEnabled", value: boolean): this;

  /**
   * Whether the refresh indicator is currently visible. Will be set to `true` when a *refresh* event is
   * triggered. Reset it to `false` when the refresh is finished.
   */
  set(property: "refreshIndicator", value: boolean): this;

  /**
   * The message text displayed together with the refresh indicator. Currently not supported on Android.
   */
  set(property: "refreshMessage", value: string): this;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  set(property: "right", value: margin): this;

  /**
   * Text color of the widget.
   */
  set(property: "textColor", value: Color): this;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  set(property: "top", value: margin): this;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  set(property: "transform", value: Transformation): this;

  /**
   * Whether the widget is visible.
   */
  set(property: "visible", value: boolean): this;

  /**
   * The width of the widget.
   */
  set(property: "width", value: dimension): this;
}

interface PageSelectorProperties extends CollectionViewProperties {

  /**
   * Background color of the widget.
   */
  background?: Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  backgroundImage?: Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  baseline?: this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  bottom?: margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  bounds?: Bounds;

  /**
   * The name of the cell type to use for a given item. This name will be passed to the `initializeCell`
   * and `itemHeight` functions. Cells will be reused only by items that require the same cell type. If
   * set to a function, this function will be called for every item, providing the item as a parameter,
   * and must return a name for the cell type to use for the given item.
   */
  cellType?: string|Function;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  centerX?: offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  centerY?: offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  class?: string;

  /**
   * The number of columns to display in the collection view. If set to a value `n > 1`, each row will
   * contain `n` items. The available space will be equally distributed between columns.
   */
  columnCount?: number;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  cornerRadius?: number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  elevation?: number;

  /**
   * Whether the widget can be operated.
   */
  enabled?: boolean;

  /**
   * The first item that is currently visible on screen. This property is read-only.
   */
  firstVisibleIndex?: number;

  /**
   * The font used for the widget.
   */
  font?: Font;

  /**
   * The height of the widget.
   */
  height?: dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  highlightOnTouch?: boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  id?: string;

  /**
   * A callback used to initialize a collection cell by attaching widget and *change:item* listener. Cells
   * are created by the framework and recycled on scrolling. This callback receives the cell as the first
   * and the cell type as second parameter.
   * @static
   */
  initializeCell?: Function;

  /**
   * The height of a collection cell. If set to a function, this function will be called for every item,
   * providing the item and the cell type as parameters, and must return the item height for the given
   * item.
   */
  itemHeight?: number|Function;

  /**
   * An array of data items to be displayed by the collection view. For dynamic content, use the methods
   * `insert` and `remove` instead of setting this property directly.
   */
  items?: any[];

  /**
   * The last item that is currently visible on screen. This property is read-only.
   */
  lastVisibleIndex?: number;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  layoutData?: LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  left?: margin;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  opacity?: number;

  /**
   * Enables the user to trigger a refresh by using the pull-to-refresh gesture.
   */
  refreshEnabled?: boolean;

  /**
   * Whether the refresh indicator is currently visible. Will be set to `true` when a *refresh* event is
   * triggered. Reset it to `false` when the refresh is finished.
   */
  refreshIndicator?: boolean;

  /**
   * The message text displayed together with the refresh indicator. Currently not supported on Android.
   */
  refreshMessage?: string;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  right?: margin;

  /**
   * Text color of the widget.
   */
  textColor?: Color;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  top?: margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  transform?: Transformation;

  /**
   * Whether the widget is visible.
   */
  visible?: boolean;

  /**
   * The width of the widget.
   */
  width?: dimension;
}

// Picker

/**
 * A widget with a drop-down list of items to choose from.
 */
export class Picker extends Widget {

  constructor(properties?: PickerProperties);

  /**
   * Removes all occurrences of *listener* that are bound to *event* and *context* from this widget.
   * If the context parameter is not present, all matching listeners will be removed.
   * If the listener parameter is not present, all listeners that are bound to *event* will be removed.
   * If the event parameter is not present, all listeners for all events will be removed from this widget.
   * Supports chaining.
   * @param event
   * @param listener
   * @param context
   */
  off(event?: string, listener?: Function, context?: this): this;
  off(event: "animationend", listener?: Function, context?: this): this;
  off(event: "animationstart", listener?: Function, context?: this): this;
  off(event: "change:selection", listener?: Function, context?: this): this;
  off(event: "change:selectionIndex", listener?: Function, context?: this): this;
  off(event: "change:{property}", listener?: Function, context?: this): this;
  off(event: "dispose", listener?: Function, context?: this): this;
  off(event: "longpress", listener?: Function, context?: this): this;
  off(event: "pan", listener?: Function, context?: this): this;
  off(event: "pan:down", listener?: Function, context?: this): this;
  off(event: "pan:left", listener?: Function, context?: this): this;
  off(event: "pan:right", listener?: Function, context?: this): this;
  off(event: "pan:up", listener?: Function, context?: this): this;
  off(event: "resize", listener?: Function, context?: this): this;
  off(event: "select", listener?: Function, context?: this): this;
  off(event: "swipe:down", listener?: Function, context?: this): this;
  off(event: "swipe:left", listener?: Function, context?: this): this;
  off(event: "swipe:right", listener?: Function, context?: this): this;
  off(event: "swipe:up", listener?: Function, context?: this): this;
  off(event: "tap", listener?: Function, context?: this): this;
  off(event: "touchcancel", listener?: Function, context?: this): this;
  off(event: "touchend", listener?: Function, context?: this): this;
  off(event: "touchmove", listener?: Function, context?: this): this;
  off(event: "touchstart", listener?: Function, context?: this): this;

  /**
   * Adds a *listener* to the list of functions to be notified when *event* is fired. If the context
   * parameter is not present, the listener will be called in the context of this object. Supports
   * chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  on(event: string, listener: Function, context?: this): this;
  on(event: "animationend", listener: (widget: this, options: Object) => any): this;
  on(event: "animationstart", listener: (widget: this, options: Object) => any): this;
  on(event: "change:selection", listener: (widget: this, selection: string, options: any) => any): this;
  on(event: "change:selectionIndex", listener: (widget: this, selectionIndex: number, options: any) => any): this;
  on(event: "change:{property}", listener: (widget: this, value: any, options: Object) => any): this;
  on(event: "dispose", listener: (widget: this) => any): this;
  on(event: "longpress", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "resize", listener: (widget: this, bounds: Bounds, options: Object) => any): this;
  on(event: "select", listener: (widget: this, selection: string, options: {index: number}) => any): this;
  on(event: "swipe:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "tap", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "touchcancel", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchend", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchmove", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchstart", listener: (widget: this, gesture: TouchEvent) => any): this;

  /**
   * Same as `on`, but removes the listener after it has been invoked by an event. Supports chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  once(event: string, listener: Function, context?: this): this;
  once(event: "animationend", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "animationstart", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "change:selection", listener: (widget: this, selection: string, options: any, context?: this) => any): this;
  once(event: "change:selectionIndex", listener: (widget: this, selectionIndex: number, options: any, context?: this) => any): this;
  once(event: "change:{property}", listener: (widget: this, value: any, options: Object, context?: this) => any): this;
  once(event: "dispose", listener: (widget: this, context?: this) => any): this;
  once(event: "longpress", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "resize", listener: (widget: this, bounds: Bounds, options: Object, context?: this) => any): this;
  once(event: "select", listener: (widget: this, selection: string, options: {index: number}, context?: this) => any): this;
  once(event: "swipe:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "tap", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "touchcancel", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchend", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchmove", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchstart", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;

  /**
   * Triggers an event of the given type. All registered listeners will be notified. Additional parameters
   * will be passed to the listeners.
   * @param event
   * @param ...params
   */
  trigger(event: string, ...params: any[]): this;

  /**
   * Gets the current value of the given *property*.
   * @param property
   */
  get(property: string): any;

  /**
   * Background color of the widget.
   */
  get(property: "background"): Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  get(property: "backgroundImage"): Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  get(property: "baseline"): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  get(property: "bottom"): margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  get(property: "bounds"): Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  get(property: "centerX"): offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  get(property: "centerY"): offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  get(property: "class"): string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  get(property: "cornerRadius"): number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  get(property: "elevation"): number;

  /**
   * Whether the widget can be operated.
   */
  get(property: "enabled"): boolean;

  /**
   * The font used for the widget.
   */
  get(property: "font"): Font;

  /**
   * The height of the widget.
   */
  get(property: "height"): dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  get(property: "highlightOnTouch"): boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  get(property: "id"): string;

  /**
   * A function that returns the string to display for a given data item. Defaults to mapping items to
   * their default string representation.
   */
  get(property: "itemText"): Function;

  /**
   * An array of data items to be displayed by the picker. If the items aren't strings, the `itemText`
   * property must be set to a function to extract item texts.
   */
  get(property: "items"): any[];

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  get(property: "layoutData"): LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  get(property: "left"): margin;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  get(property: "opacity"): number;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  get(property: "right"): margin;

  /**
   * The currently selected data item.
   */
  get(property: "selection"): any;

  /**
   * The index of the currently selected item.
   */
  get(property: "selectionIndex"): number;

  /**
   * Text color of the widget.
   */
  get(property: "textColor"): Color;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  get(property: "top"): margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  get(property: "transform"): Transformation;

  /**
   * Whether the widget is visible.
   */
  get(property: "visible"): boolean;

  /**
   * The width of the widget.
   */
  get(property: "width"): dimension;

  /**
   * Sets the given property. Supports chaining.
   * @param property
   * @param value
   */
  set(property: string, value: any): this;

  /**
   * Sets all key-value pairs in the properties object as widget properties. Supports chaining.
   * @param properties
   */
  set(properties: PickerProperties): this;

  /**
   * Background color of the widget.
   */
  set(property: "background", value: Color): this;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  set(property: "backgroundImage", value: Image): this;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  set(property: "baseline", value: this): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  set(property: "bottom", value: margin): this;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  set(property: "bounds", value: Bounds): this;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  set(property: "centerX", value: offset): this;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  set(property: "centerY", value: offset): this;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  set(property: "class", value: string): this;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  set(property: "cornerRadius", value: number): this;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  set(property: "elevation", value: number): this;

  /**
   * Whether the widget can be operated.
   */
  set(property: "enabled", value: boolean): this;

  /**
   * The font used for the widget.
   */
  set(property: "font", value: Font): this;

  /**
   * The height of the widget.
   */
  set(property: "height", value: dimension): this;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  set(property: "highlightOnTouch", value: boolean): this;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  set(property: "id", value: string): this;

  /**
   * A function that returns the string to display for a given data item. Defaults to mapping items to
   * their default string representation.
   */
  set(property: "itemText", value: Function): this;

  /**
   * An array of data items to be displayed by the picker. If the items aren't strings, the `itemText`
   * property must be set to a function to extract item texts.
   */
  set(property: "items", value: any[]): this;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  set(property: "layoutData", value: LayoutData): this;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  set(property: "left", value: margin): this;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  set(property: "opacity", value: number): this;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  set(property: "right", value: margin): this;

  /**
   * The currently selected data item.
   */
  set(property: "selection", value: any): this;

  /**
   * The index of the currently selected item.
   */
  set(property: "selectionIndex", value: number): this;

  /**
   * Text color of the widget.
   */
  set(property: "textColor", value: Color): this;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  set(property: "top", value: margin): this;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  set(property: "transform", value: Transformation): this;

  /**
   * Whether the widget is visible.
   */
  set(property: "visible", value: boolean): this;

  /**
   * The width of the widget.
   */
  set(property: "width", value: dimension): this;
}

interface PickerProperties extends WidgetProperties {

  /**
   * Background color of the widget.
   */
  background?: Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  backgroundImage?: Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  baseline?: this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  bottom?: margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  bounds?: Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  centerX?: offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  centerY?: offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  class?: string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  cornerRadius?: number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  elevation?: number;

  /**
   * Whether the widget can be operated.
   */
  enabled?: boolean;

  /**
   * The font used for the widget.
   */
  font?: Font;

  /**
   * The height of the widget.
   */
  height?: dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  highlightOnTouch?: boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  id?: string;

  /**
   * A function that returns the string to display for a given data item. Defaults to mapping items to
   * their default string representation.
   */
  itemText?: Function;

  /**
   * An array of data items to be displayed by the picker. If the items aren't strings, the `itemText`
   * property must be set to a function to extract item texts.
   */
  items?: any[];

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  layoutData?: LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  left?: margin;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  opacity?: number;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  right?: margin;

  /**
   * The currently selected data item.
   */
  selection?: any;

  /**
   * The index of the currently selected item.
   */
  selectionIndex?: number;

  /**
   * Text color of the widget.
   */
  textColor?: Color;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  top?: margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  transform?: Transformation;

  /**
   * Whether the widget is visible.
   */
  visible?: boolean;

  /**
   * The width of the widget.
   */
  width?: dimension;
}

// ProgressBar

/**
 * A widget representing a numeric value as a horizontal bar with a growing indicator.
 */
export class ProgressBar extends Widget {

  constructor(properties?: ProgressBarProperties);

  /**
   * Removes all occurrences of *listener* that are bound to *event* and *context* from this widget.
   * If the context parameter is not present, all matching listeners will be removed.
   * If the listener parameter is not present, all listeners that are bound to *event* will be removed.
   * If the event parameter is not present, all listeners for all events will be removed from this widget.
   * Supports chaining.
   * @param event
   * @param listener
   * @param context
   */
  off(event?: string, listener?: Function, context?: this): this;
  off(event: "animationend", listener?: Function, context?: this): this;
  off(event: "animationstart", listener?: Function, context?: this): this;
  off(event: "change:{property}", listener?: Function, context?: this): this;
  off(event: "dispose", listener?: Function, context?: this): this;
  off(event: "longpress", listener?: Function, context?: this): this;
  off(event: "pan", listener?: Function, context?: this): this;
  off(event: "pan:down", listener?: Function, context?: this): this;
  off(event: "pan:left", listener?: Function, context?: this): this;
  off(event: "pan:right", listener?: Function, context?: this): this;
  off(event: "pan:up", listener?: Function, context?: this): this;
  off(event: "resize", listener?: Function, context?: this): this;
  off(event: "swipe:down", listener?: Function, context?: this): this;
  off(event: "swipe:left", listener?: Function, context?: this): this;
  off(event: "swipe:right", listener?: Function, context?: this): this;
  off(event: "swipe:up", listener?: Function, context?: this): this;
  off(event: "tap", listener?: Function, context?: this): this;
  off(event: "touchcancel", listener?: Function, context?: this): this;
  off(event: "touchend", listener?: Function, context?: this): this;
  off(event: "touchmove", listener?: Function, context?: this): this;
  off(event: "touchstart", listener?: Function, context?: this): this;

  /**
   * Adds a *listener* to the list of functions to be notified when *event* is fired. If the context
   * parameter is not present, the listener will be called in the context of this object. Supports
   * chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  on(event: string, listener: Function, context?: this): this;
  on(event: "animationend", listener: (widget: this, options: Object) => any): this;
  on(event: "animationstart", listener: (widget: this, options: Object) => any): this;
  on(event: "change:{property}", listener: (widget: this, value: any, options: Object) => any): this;
  on(event: "dispose", listener: (widget: this) => any): this;
  on(event: "longpress", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "resize", listener: (widget: this, bounds: Bounds, options: Object) => any): this;
  on(event: "swipe:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "tap", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "touchcancel", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchend", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchmove", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchstart", listener: (widget: this, gesture: TouchEvent) => any): this;

  /**
   * Same as `on`, but removes the listener after it has been invoked by an event. Supports chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  once(event: string, listener: Function, context?: this): this;
  once(event: "animationend", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "animationstart", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "change:{property}", listener: (widget: this, value: any, options: Object, context?: this) => any): this;
  once(event: "dispose", listener: (widget: this, context?: this) => any): this;
  once(event: "longpress", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "resize", listener: (widget: this, bounds: Bounds, options: Object, context?: this) => any): this;
  once(event: "swipe:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "tap", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "touchcancel", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchend", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchmove", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchstart", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;

  /**
   * Triggers an event of the given type. All registered listeners will be notified. Additional parameters
   * will be passed to the listeners.
   * @param event
   * @param ...params
   */
  trigger(event: string, ...params: any[]): this;

  /**
   * Gets the current value of the given *property*.
   * @param property
   */
  get(property: string): any;

  /**
   * Background color of the widget.
   */
  get(property: "background"): Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  get(property: "backgroundImage"): Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  get(property: "baseline"): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  get(property: "bottom"): margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  get(property: "bounds"): Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  get(property: "centerX"): offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  get(property: "centerY"): offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  get(property: "class"): string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  get(property: "cornerRadius"): number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  get(property: "elevation"): number;

  /**
   * Whether the widget can be operated.
   */
  get(property: "enabled"): boolean;

  /**
   * The font used for the widget.
   */
  get(property: "font"): Font;

  /**
   * The height of the widget.
   */
  get(property: "height"): dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  get(property: "highlightOnTouch"): boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  get(property: "id"): string;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  get(property: "layoutData"): LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  get(property: "left"): margin;

  /**
   * The value that represents a progress of 100%.
   */
  get(property: "maximum"): number;

  /**
   * The value that represents a progress of 0%.
   */
  get(property: "minimum"): number;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  get(property: "opacity"): number;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  get(property: "right"): margin;

  /**
   * The actual progress to be displayed.
   */
  get(property: "selection"): number;

  /**
   * This property affects the color of the progress indicator. Not supported on iOS.
   */
  get(property: "state"): string;

  /**
   * Text color of the widget.
   */
  get(property: "textColor"): Color;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  get(property: "top"): margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  get(property: "transform"): Transformation;

  /**
   * Whether the widget is visible.
   */
  get(property: "visible"): boolean;

  /**
   * The width of the widget.
   */
  get(property: "width"): dimension;

  /**
   * Sets the given property. Supports chaining.
   * @param property
   * @param value
   */
  set(property: string, value: any): this;

  /**
   * Sets all key-value pairs in the properties object as widget properties. Supports chaining.
   * @param properties
   */
  set(properties: ProgressBarProperties): this;

  /**
   * Background color of the widget.
   */
  set(property: "background", value: Color): this;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  set(property: "backgroundImage", value: Image): this;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  set(property: "baseline", value: this): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  set(property: "bottom", value: margin): this;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  set(property: "bounds", value: Bounds): this;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  set(property: "centerX", value: offset): this;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  set(property: "centerY", value: offset): this;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  set(property: "class", value: string): this;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  set(property: "cornerRadius", value: number): this;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  set(property: "elevation", value: number): this;

  /**
   * Whether the widget can be operated.
   */
  set(property: "enabled", value: boolean): this;

  /**
   * The font used for the widget.
   */
  set(property: "font", value: Font): this;

  /**
   * The height of the widget.
   */
  set(property: "height", value: dimension): this;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  set(property: "highlightOnTouch", value: boolean): this;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  set(property: "id", value: string): this;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  set(property: "layoutData", value: LayoutData): this;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  set(property: "left", value: margin): this;

  /**
   * The value that represents a progress of 100%.
   */
  set(property: "maximum", value: number): this;

  /**
   * The value that represents a progress of 0%.
   */
  set(property: "minimum", value: number): this;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  set(property: "opacity", value: number): this;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  set(property: "right", value: margin): this;

  /**
   * The actual progress to be displayed.
   */
  set(property: "selection", value: number): this;

  /**
   * This property affects the color of the progress indicator. Not supported on iOS.
   */
  set(property: "state", value: string): this;
  set(property: "state", value: "error"): this;
  set(property: "state", value: "normal"): this;
  set(property: "state", value: "paused"): this;

  /**
   * Text color of the widget.
   */
  set(property: "textColor", value: Color): this;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  set(property: "top", value: margin): this;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  set(property: "transform", value: Transformation): this;

  /**
   * Whether the widget is visible.
   */
  set(property: "visible", value: boolean): this;

  /**
   * The width of the widget.
   */
  set(property: "width", value: dimension): this;
}

interface ProgressBarProperties extends WidgetProperties {

  /**
   * Background color of the widget.
   */
  background?: Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  backgroundImage?: Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  baseline?: this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  bottom?: margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  bounds?: Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  centerX?: offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  centerY?: offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  class?: string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  cornerRadius?: number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  elevation?: number;

  /**
   * Whether the widget can be operated.
   */
  enabled?: boolean;

  /**
   * The font used for the widget.
   */
  font?: Font;

  /**
   * The height of the widget.
   */
  height?: dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  highlightOnTouch?: boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  id?: string;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  layoutData?: LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  left?: margin;

  /**
   * The value that represents a progress of 100%.
   */
  maximum?: number;

  /**
   * The value that represents a progress of 0%.
   */
  minimum?: number;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  opacity?: number;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  right?: margin;

  /**
   * The actual progress to be displayed.
   */
  selection?: number;

  /**
   * This property affects the color of the progress indicator. Not supported on iOS.
   */
  state?: string;

  /**
   * Text color of the widget.
   */
  textColor?: Color;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  top?: margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  transform?: Transformation;

  /**
   * Whether the widget is visible.
   */
  visible?: boolean;

  /**
   * The width of the widget.
   */
  width?: dimension;
}

// RadioButton

/**
 * A radio button. Selecting a radio button de-selects all its siblings (i.e. all radio buttons within
 * the same parent).
 */
export class RadioButton extends Widget {

  constructor(properties?: RadioButtonProperties);

  /**
   * Removes all occurrences of *listener* that are bound to *event* and *context* from this widget.
   * If the context parameter is not present, all matching listeners will be removed.
   * If the listener parameter is not present, all listeners that are bound to *event* will be removed.
   * If the event parameter is not present, all listeners for all events will be removed from this widget.
   * Supports chaining.
   * @param event
   * @param listener
   * @param context
   */
  off(event?: string, listener?: Function, context?: this): this;
  off(event: "animationend", listener?: Function, context?: this): this;
  off(event: "animationstart", listener?: Function, context?: this): this;
  off(event: "change:selection", listener?: Function, context?: this): this;
  off(event: "change:{property}", listener?: Function, context?: this): this;
  off(event: "dispose", listener?: Function, context?: this): this;
  off(event: "longpress", listener?: Function, context?: this): this;
  off(event: "pan", listener?: Function, context?: this): this;
  off(event: "pan:down", listener?: Function, context?: this): this;
  off(event: "pan:left", listener?: Function, context?: this): this;
  off(event: "pan:right", listener?: Function, context?: this): this;
  off(event: "pan:up", listener?: Function, context?: this): this;
  off(event: "resize", listener?: Function, context?: this): this;
  off(event: "select", listener?: Function, context?: this): this;
  off(event: "swipe:down", listener?: Function, context?: this): this;
  off(event: "swipe:left", listener?: Function, context?: this): this;
  off(event: "swipe:right", listener?: Function, context?: this): this;
  off(event: "swipe:up", listener?: Function, context?: this): this;
  off(event: "tap", listener?: Function, context?: this): this;
  off(event: "touchcancel", listener?: Function, context?: this): this;
  off(event: "touchend", listener?: Function, context?: this): this;
  off(event: "touchmove", listener?: Function, context?: this): this;
  off(event: "touchstart", listener?: Function, context?: this): this;

  /**
   * Adds a *listener* to the list of functions to be notified when *event* is fired. If the context
   * parameter is not present, the listener will be called in the context of this object. Supports
   * chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  on(event: string, listener: Function, context?: this): this;
  on(event: "animationend", listener: (widget: this, options: Object) => any): this;
  on(event: "animationstart", listener: (widget: this, options: Object) => any): this;
  on(event: "change:selection", listener: (widget: this, selection: boolean, options: any) => any): this;
  on(event: "change:{property}", listener: (widget: this, value: any, options: Object) => any): this;
  on(event: "dispose", listener: (widget: this) => any): this;
  on(event: "longpress", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "resize", listener: (widget: this, bounds: Bounds, options: Object) => any): this;
  on(event: "select", listener: (widget: this, selection: boolean, options: any) => any): this;
  on(event: "swipe:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "tap", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "touchcancel", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchend", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchmove", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchstart", listener: (widget: this, gesture: TouchEvent) => any): this;

  /**
   * Same as `on`, but removes the listener after it has been invoked by an event. Supports chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  once(event: string, listener: Function, context?: this): this;
  once(event: "animationend", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "animationstart", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "change:selection", listener: (widget: this, selection: boolean, options: any, context?: this) => any): this;
  once(event: "change:{property}", listener: (widget: this, value: any, options: Object, context?: this) => any): this;
  once(event: "dispose", listener: (widget: this, context?: this) => any): this;
  once(event: "longpress", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "resize", listener: (widget: this, bounds: Bounds, options: Object, context?: this) => any): this;
  once(event: "select", listener: (widget: this, selection: boolean, options: any, context?: this) => any): this;
  once(event: "swipe:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "tap", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "touchcancel", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchend", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchmove", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchstart", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;

  /**
   * Triggers an event of the given type. All registered listeners will be notified. Additional parameters
   * will be passed to the listeners.
   * @param event
   * @param ...params
   */
  trigger(event: string, ...params: any[]): this;

  /**
   * Gets the current value of the given *property*.
   * @param property
   */
  get(property: string): any;

  /**
   * Background color of the widget.
   */
  get(property: "background"): Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  get(property: "backgroundImage"): Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  get(property: "baseline"): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  get(property: "bottom"): margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  get(property: "bounds"): Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  get(property: "centerX"): offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  get(property: "centerY"): offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  get(property: "class"): string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  get(property: "cornerRadius"): number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  get(property: "elevation"): number;

  /**
   * Whether the widget can be operated.
   */
  get(property: "enabled"): boolean;

  /**
   * The font used for the widget.
   */
  get(property: "font"): Font;

  /**
   * The height of the widget.
   */
  get(property: "height"): dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  get(property: "highlightOnTouch"): boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  get(property: "id"): string;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  get(property: "layoutData"): LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  get(property: "left"): margin;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  get(property: "opacity"): number;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  get(property: "right"): margin;

  /**
   * The checked state of the radio button.
   */
  get(property: "selection"): boolean;

  /**
   * The label text of the radio button.
   */
  get(property: "text"): string;

  /**
   * Text color of the widget.
   */
  get(property: "textColor"): Color;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  get(property: "top"): margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  get(property: "transform"): Transformation;

  /**
   * Whether the widget is visible.
   */
  get(property: "visible"): boolean;

  /**
   * The width of the widget.
   */
  get(property: "width"): dimension;

  /**
   * Sets the given property. Supports chaining.
   * @param property
   * @param value
   */
  set(property: string, value: any): this;

  /**
   * Sets all key-value pairs in the properties object as widget properties. Supports chaining.
   * @param properties
   */
  set(properties: RadioButtonProperties): this;

  /**
   * Background color of the widget.
   */
  set(property: "background", value: Color): this;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  set(property: "backgroundImage", value: Image): this;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  set(property: "baseline", value: this): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  set(property: "bottom", value: margin): this;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  set(property: "bounds", value: Bounds): this;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  set(property: "centerX", value: offset): this;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  set(property: "centerY", value: offset): this;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  set(property: "class", value: string): this;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  set(property: "cornerRadius", value: number): this;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  set(property: "elevation", value: number): this;

  /**
   * Whether the widget can be operated.
   */
  set(property: "enabled", value: boolean): this;

  /**
   * The font used for the widget.
   */
  set(property: "font", value: Font): this;

  /**
   * The height of the widget.
   */
  set(property: "height", value: dimension): this;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  set(property: "highlightOnTouch", value: boolean): this;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  set(property: "id", value: string): this;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  set(property: "layoutData", value: LayoutData): this;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  set(property: "left", value: margin): this;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  set(property: "opacity", value: number): this;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  set(property: "right", value: margin): this;

  /**
   * The checked state of the radio button.
   */
  set(property: "selection", value: boolean): this;

  /**
   * The label text of the radio button.
   */
  set(property: "text", value: string): this;

  /**
   * Text color of the widget.
   */
  set(property: "textColor", value: Color): this;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  set(property: "top", value: margin): this;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  set(property: "transform", value: Transformation): this;

  /**
   * Whether the widget is visible.
   */
  set(property: "visible", value: boolean): this;

  /**
   * The width of the widget.
   */
  set(property: "width", value: dimension): this;
}

interface RadioButtonProperties extends WidgetProperties {

  /**
   * Background color of the widget.
   */
  background?: Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  backgroundImage?: Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  baseline?: this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  bottom?: margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  bounds?: Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  centerX?: offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  centerY?: offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  class?: string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  cornerRadius?: number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  elevation?: number;

  /**
   * Whether the widget can be operated.
   */
  enabled?: boolean;

  /**
   * The font used for the widget.
   */
  font?: Font;

  /**
   * The height of the widget.
   */
  height?: dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  highlightOnTouch?: boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  id?: string;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  layoutData?: LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  left?: margin;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  opacity?: number;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  right?: margin;

  /**
   * The checked state of the radio button.
   */
  selection?: boolean;

  /**
   * The label text of the radio button.
   */
  text?: string;

  /**
   * Text color of the widget.
   */
  textColor?: Color;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  top?: margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  transform?: Transformation;

  /**
   * Whether the widget is visible.
   */
  visible?: boolean;

  /**
   * The width of the widget.
   */
  width?: dimension;
}

// ScrollView

/**
 * A composite that allows its content to overflow either vertically (default) or horizontally. Since
 * the ScrollView does not compute its own size, the width and height must be defined by the respective
 * layout properties (e.g. either `width` or `left` and `right` must be specified).
 */
export class ScrollView extends Composite {

  constructor(properties?: ScrollViewProperties);

  /**
   * Removes all occurrences of *listener* that are bound to *event* and *context* from this widget.
   * If the context parameter is not present, all matching listeners will be removed.
   * If the listener parameter is not present, all listeners that are bound to *event* will be removed.
   * If the event parameter is not present, all listeners for all events will be removed from this widget.
   * Supports chaining.
   * @param event
   * @param listener
   * @param context
   */
  off(event?: string, listener?: Function, context?: this): this;
  off(event: "addchild", listener?: Function, context?: this): this;
  off(event: "animationend", listener?: Function, context?: this): this;
  off(event: "animationstart", listener?: Function, context?: this): this;
  off(event: "change:{property}", listener?: Function, context?: this): this;
  off(event: "dispose", listener?: Function, context?: this): this;
  off(event: "longpress", listener?: Function, context?: this): this;
  off(event: "pan", listener?: Function, context?: this): this;
  off(event: "pan:down", listener?: Function, context?: this): this;
  off(event: "pan:left", listener?: Function, context?: this): this;
  off(event: "pan:right", listener?: Function, context?: this): this;
  off(event: "pan:up", listener?: Function, context?: this): this;
  off(event: "removechild", listener?: Function, context?: this): this;
  off(event: "resize", listener?: Function, context?: this): this;
  off(event: "scroll", listener?: Function, context?: this): this;
  off(event: "swipe:down", listener?: Function, context?: this): this;
  off(event: "swipe:left", listener?: Function, context?: this): this;
  off(event: "swipe:right", listener?: Function, context?: this): this;
  off(event: "swipe:up", listener?: Function, context?: this): this;
  off(event: "tap", listener?: Function, context?: this): this;
  off(event: "touchcancel", listener?: Function, context?: this): this;
  off(event: "touchend", listener?: Function, context?: this): this;
  off(event: "touchmove", listener?: Function, context?: this): this;
  off(event: "touchstart", listener?: Function, context?: this): this;

  /**
   * Adds a *listener* to the list of functions to be notified when *event* is fired. If the context
   * parameter is not present, the listener will be called in the context of this object. Supports
   * chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  on(event: string, listener: Function, context?: this): this;
  on(event: "addchild", listener: (widget: this, child: Widget, options: any) => any): this;
  on(event: "animationend", listener: (widget: this, options: Object) => any): this;
  on(event: "animationstart", listener: (widget: this, options: Object) => any): this;
  on(event: "change:{property}", listener: (widget: this, value: any, options: Object) => any): this;
  on(event: "dispose", listener: (widget: this) => any): this;
  on(event: "longpress", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "removechild", listener: (widget: this, child: Widget, options: {index: number}) => any): this;
  on(event: "resize", listener: (widget: this, bounds: Bounds, options: Object) => any): this;
  on(event: "scroll", listener: (widget: this, offset: {x: number, y: number}) => any): this;
  on(event: "swipe:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "tap", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "touchcancel", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchend", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchmove", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchstart", listener: (widget: this, gesture: TouchEvent) => any): this;

  /**
   * Same as `on`, but removes the listener after it has been invoked by an event. Supports chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  once(event: string, listener: Function, context?: this): this;
  once(event: "addchild", listener: (widget: this, child: Widget, options: any, context?: this) => any): this;
  once(event: "animationend", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "animationstart", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "change:{property}", listener: (widget: this, value: any, options: Object, context?: this) => any): this;
  once(event: "dispose", listener: (widget: this, context?: this) => any): this;
  once(event: "longpress", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "removechild", listener: (widget: this, child: Widget, options: {index: number}, context?: this) => any): this;
  once(event: "resize", listener: (widget: this, bounds: Bounds, options: Object, context?: this) => any): this;
  once(event: "scroll", listener: (widget: this, offset: {x: number, y: number}, context?: this) => any): this;
  once(event: "swipe:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "tap", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "touchcancel", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchend", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchmove", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchstart", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;

  /**
   * Triggers an event of the given type. All registered listeners will be notified. Additional parameters
   * will be passed to the listeners.
   * @param event
   * @param ...params
   */
  trigger(event: string, ...params: any[]): this;

  /**
   * Gets the current value of the given *property*.
   * @param property
   */
  get(property: string): any;

  /**
   * Background color of the widget.
   */
  get(property: "background"): Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  get(property: "backgroundImage"): Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  get(property: "baseline"): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  get(property: "bottom"): margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  get(property: "bounds"): Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  get(property: "centerX"): offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  get(property: "centerY"): offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  get(property: "class"): string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  get(property: "cornerRadius"): number;

  /**
   * Specifies the scrolling direction of the scroll composite.
   * @static
   */
  get(property: "direction"): string;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  get(property: "elevation"): number;

  /**
   * Whether the widget can be operated.
   */
  get(property: "enabled"): boolean;

  /**
   * The font used for the widget.
   */
  get(property: "font"): Font;

  /**
   * The height of the widget.
   */
  get(property: "height"): dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  get(property: "highlightOnTouch"): boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  get(property: "id"): string;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  get(property: "layoutData"): LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  get(property: "left"): margin;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  get(property: "opacity"): number;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  get(property: "right"): margin;

  /**
   * The horizontal scrolling position.
   */
  get(property: "scrollX"): number;

  /**
   * The vertical scrolling position.
   */
  get(property: "scrollY"): number;

  /**
   * Text color of the widget.
   */
  get(property: "textColor"): Color;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  get(property: "top"): margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  get(property: "transform"): Transformation;

  /**
   * Whether the widget is visible.
   */
  get(property: "visible"): boolean;

  /**
   * The width of the widget.
   */
  get(property: "width"): dimension;

  /**
   * Sets the given property. Supports chaining.
   * @param property
   * @param value
   */
  set(property: string, value: any): this;

  /**
   * Sets all key-value pairs in the properties object as widget properties. Supports chaining.
   * @param properties
   */
  set(properties: ScrollViewProperties): this;

  /**
   * Background color of the widget.
   */
  set(property: "background", value: Color): this;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  set(property: "backgroundImage", value: Image): this;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  set(property: "baseline", value: this): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  set(property: "bottom", value: margin): this;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  set(property: "bounds", value: Bounds): this;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  set(property: "centerX", value: offset): this;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  set(property: "centerY", value: offset): this;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  set(property: "class", value: string): this;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  set(property: "cornerRadius", value: number): this;

  /**
   * Specifies the scrolling direction of the scroll composite.
   * @static
   */
  set(property: "direction", value: string): this;
  set(property: "direction", value: "horizontal"): this;
  set(property: "direction", value: "vertical"): this;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  set(property: "elevation", value: number): this;

  /**
   * Whether the widget can be operated.
   */
  set(property: "enabled", value: boolean): this;

  /**
   * The font used for the widget.
   */
  set(property: "font", value: Font): this;

  /**
   * The height of the widget.
   */
  set(property: "height", value: dimension): this;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  set(property: "highlightOnTouch", value: boolean): this;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  set(property: "id", value: string): this;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  set(property: "layoutData", value: LayoutData): this;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  set(property: "left", value: margin): this;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  set(property: "opacity", value: number): this;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  set(property: "right", value: margin): this;

  /**
   * The horizontal scrolling position.
   */
  set(property: "scrollX", value: number): this;

  /**
   * The vertical scrolling position.
   */
  set(property: "scrollY", value: number): this;

  /**
   * Text color of the widget.
   */
  set(property: "textColor", value: Color): this;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  set(property: "top", value: margin): this;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  set(property: "transform", value: Transformation): this;

  /**
   * Whether the widget is visible.
   */
  set(property: "visible", value: boolean): this;

  /**
   * The width of the widget.
   */
  set(property: "width", value: dimension): this;
}

interface ScrollViewProperties extends CompositeProperties {

  /**
   * Background color of the widget.
   */
  background?: Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  backgroundImage?: Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  baseline?: this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  bottom?: margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  bounds?: Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  centerX?: offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  centerY?: offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  class?: string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  cornerRadius?: number;

  /**
   * Specifies the scrolling direction of the scroll composite.
   * @static
   */
  direction?: string;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  elevation?: number;

  /**
   * Whether the widget can be operated.
   */
  enabled?: boolean;

  /**
   * The font used for the widget.
   */
  font?: Font;

  /**
   * The height of the widget.
   */
  height?: dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  highlightOnTouch?: boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  id?: string;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  layoutData?: LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  left?: margin;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  opacity?: number;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  right?: margin;

  /**
   * The horizontal scrolling position.
   */
  scrollX?: number;

  /**
   * The vertical scrolling position.
   */
  scrollY?: number;

  /**
   * Text color of the widget.
   */
  textColor?: Color;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  top?: margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  transform?: Transformation;

  /**
   * Whether the widget is visible.
   */
  visible?: boolean;

  /**
   * The width of the widget.
   */
  width?: dimension;
}

// SearchAction

/**
 * An action that displays a search text field with dynamic proposals when selected. Add a listener on
 * *select* to implement the action. On *input*, you may set a list of *proposals*.
 */
export class SearchAction extends Action {

  constructor(properties?: SearchActionProperties);

  /**
   * Invokes the search action, i.e. displays the ui to perform a search.
   */
  open(): void;

  /**
   * Removes all occurrences of *listener* that are bound to *event* and *context* from this widget.
   * If the context parameter is not present, all matching listeners will be removed.
   * If the listener parameter is not present, all listeners that are bound to *event* will be removed.
   * If the event parameter is not present, all listeners for all events will be removed from this widget.
   * Supports chaining.
   * @param event
   * @param listener
   * @param context
   */
  off(event?: string, listener?: Function, context?: this): this;
  off(event: "accept", listener?: Function, context?: this): this;
  off(event: "animationend", listener?: Function, context?: this): this;
  off(event: "animationstart", listener?: Function, context?: this): this;
  off(event: "change:{property}", listener?: Function, context?: this): this;
  off(event: "dispose", listener?: Function, context?: this): this;
  off(event: "input", listener?: Function, context?: this): this;
  off(event: "longpress", listener?: Function, context?: this): this;
  off(event: "pan", listener?: Function, context?: this): this;
  off(event: "pan:down", listener?: Function, context?: this): this;
  off(event: "pan:left", listener?: Function, context?: this): this;
  off(event: "pan:right", listener?: Function, context?: this): this;
  off(event: "pan:up", listener?: Function, context?: this): this;
  off(event: "resize", listener?: Function, context?: this): this;
  off(event: "select", listener?: Function, context?: this): this;
  off(event: "swipe:down", listener?: Function, context?: this): this;
  off(event: "swipe:left", listener?: Function, context?: this): this;
  off(event: "swipe:right", listener?: Function, context?: this): this;
  off(event: "swipe:up", listener?: Function, context?: this): this;
  off(event: "tap", listener?: Function, context?: this): this;
  off(event: "touchcancel", listener?: Function, context?: this): this;
  off(event: "touchend", listener?: Function, context?: this): this;
  off(event: "touchmove", listener?: Function, context?: this): this;
  off(event: "touchstart", listener?: Function, context?: this): this;

  /**
   * Adds a *listener* to the list of functions to be notified when *event* is fired. If the context
   * parameter is not present, the listener will be called in the context of this object. Supports
   * chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  on(event: string, listener: Function, context?: this): this;
  on(event: "accept", listener: (widget: SearchAction, text: string, options: any) => any): this;
  on(event: "animationend", listener: (widget: this, options: Object) => any): this;
  on(event: "animationstart", listener: (widget: this, options: Object) => any): this;
  on(event: "change:{property}", listener: (widget: this, value: any, options: Object) => any): this;
  on(event: "dispose", listener: (widget: this) => any): this;
  on(event: "input", listener: (widget: this, text: string, options: any) => any): this;
  on(event: "longpress", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "resize", listener: (widget: this, bounds: Bounds, options: Object) => any): this;
  on(event: "select", listener: (widget: this) => any): this;
  on(event: "swipe:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "tap", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "touchcancel", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchend", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchmove", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchstart", listener: (widget: this, gesture: TouchEvent) => any): this;

  /**
   * Same as `on`, but removes the listener after it has been invoked by an event. Supports chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  once(event: string, listener: Function, context?: this): this;
  once(event: "accept", listener: (widget: SearchAction, text: string, options: any, context?: this) => any): this;
  once(event: "animationend", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "animationstart", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "change:{property}", listener: (widget: this, value: any, options: Object, context?: this) => any): this;
  once(event: "dispose", listener: (widget: this, context?: this) => any): this;
  once(event: "input", listener: (widget: this, text: string, options: any, context?: this) => any): this;
  once(event: "longpress", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "resize", listener: (widget: this, bounds: Bounds, options: Object, context?: this) => any): this;
  once(event: "select", listener: (widget: this, context?: this) => any): this;
  once(event: "swipe:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "tap", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "touchcancel", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchend", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchmove", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchstart", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;

  /**
   * Triggers an event of the given type. All registered listeners will be notified. Additional parameters
   * will be passed to the listeners.
   * @param event
   * @param ...params
   */
  trigger(event: string, ...params: any[]): this;

  /**
   * Gets the current value of the given *property*.
   * @param property
   */
  get(property: string): any;

  /**
   * Background color of the widget.
   */
  get(property: "background"): Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  get(property: "backgroundImage"): Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  get(property: "baseline"): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  get(property: "bottom"): margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  get(property: "bounds"): Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  get(property: "centerX"): offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  get(property: "centerY"): offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  get(property: "class"): string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  get(property: "cornerRadius"): number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  get(property: "elevation"): number;

  /**
   * Whether the widget can be operated.
   */
  get(property: "enabled"): boolean;

  /**
   * The font used for the widget.
   */
  get(property: "font"): Font;

  /**
   * The height of the widget.
   */
  get(property: "height"): dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  get(property: "highlightOnTouch"): boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  get(property: "id"): string;

  /**
   * Icon image for the action.
   */
  get(property: "image"): Image;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  get(property: "layoutData"): LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  get(property: "left"): margin;

  /**
   * A hint text that is displayed when the search input is empty.
   */
  get(property: "message"): string;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  get(property: "opacity"): number;

  /**
   * Actions with higher placement priority will be placed at a more significant position in the UI, e.g.
   * low priority actions could go into a menu instead of being included in a toolbar.
   */
  get(property: "placementPriority"): string;

  /**
   * The list of proposals to display.
   */
  get(property: "proposals"): string[];

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  get(property: "right"): margin;

  /**
   * The text in the search input field.
   */
  get(property: "text"): string;

  /**
   * Text color of the widget.
   */
  get(property: "textColor"): Color;

  /**
   * The text to be displayed for the action.
   */
  get(property: "title"): string;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  get(property: "top"): margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  get(property: "transform"): Transformation;

  /**
   * Whether the widget is visible.
   */
  get(property: "visible"): boolean;

  /**
   * The width of the widget.
   */
  get(property: "width"): dimension;

  /**
   * Sets the given property. Supports chaining.
   * @param property
   * @param value
   */
  set(property: string, value: any): this;

  /**
   * Sets all key-value pairs in the properties object as widget properties. Supports chaining.
   * @param properties
   */
  set(properties: SearchActionProperties): this;

  /**
   * Background color of the widget.
   */
  set(property: "background", value: Color): this;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  set(property: "backgroundImage", value: Image): this;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  set(property: "baseline", value: this): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  set(property: "bottom", value: margin): this;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  set(property: "bounds", value: Bounds): this;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  set(property: "centerX", value: offset): this;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  set(property: "centerY", value: offset): this;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  set(property: "class", value: string): this;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  set(property: "cornerRadius", value: number): this;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  set(property: "elevation", value: number): this;

  /**
   * Whether the widget can be operated.
   */
  set(property: "enabled", value: boolean): this;

  /**
   * The font used for the widget.
   */
  set(property: "font", value: Font): this;

  /**
   * The height of the widget.
   */
  set(property: "height", value: dimension): this;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  set(property: "highlightOnTouch", value: boolean): this;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  set(property: "id", value: string): this;

  /**
   * Icon image for the action.
   */
  set(property: "image", value: Image): this;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  set(property: "layoutData", value: LayoutData): this;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  set(property: "left", value: margin): this;

  /**
   * A hint text that is displayed when the search input is empty.
   */
  set(property: "message", value: string): this;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  set(property: "opacity", value: number): this;

  /**
   * Actions with higher placement priority will be placed at a more significant position in the UI, e.g.
   * low priority actions could go into a menu instead of being included in a toolbar.
   */
  set(property: "placementPriority", value: string): this;
  set(property: "placementPriority", value: "high"): this;
  set(property: "placementPriority", value: "low"): this;
  set(property: "placementPriority", value: "normal"): this;

  /**
   * The list of proposals to display.
   */
  set(property: "proposals", value: string[]): this;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  set(property: "right", value: margin): this;

  /**
   * The text in the search input field.
   */
  set(property: "text", value: string): this;

  /**
   * Text color of the widget.
   */
  set(property: "textColor", value: Color): this;

  /**
   * The text to be displayed for the action.
   */
  set(property: "title", value: string): this;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  set(property: "top", value: margin): this;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  set(property: "transform", value: Transformation): this;

  /**
   * Whether the widget is visible.
   */
  set(property: "visible", value: boolean): this;

  /**
   * The width of the widget.
   */
  set(property: "width", value: dimension): this;
}

interface SearchActionProperties extends ActionProperties {

  /**
   * Background color of the widget.
   */
  background?: Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  backgroundImage?: Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  baseline?: this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  bottom?: margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  bounds?: Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  centerX?: offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  centerY?: offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  class?: string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  cornerRadius?: number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  elevation?: number;

  /**
   * Whether the widget can be operated.
   */
  enabled?: boolean;

  /**
   * The font used for the widget.
   */
  font?: Font;

  /**
   * The height of the widget.
   */
  height?: dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  highlightOnTouch?: boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  id?: string;

  /**
   * Icon image for the action.
   */
  image?: Image;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  layoutData?: LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  left?: margin;

  /**
   * A hint text that is displayed when the search input is empty.
   */
  message?: string;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  opacity?: number;

  /**
   * Actions with higher placement priority will be placed at a more significant position in the UI, e.g.
   * low priority actions could go into a menu instead of being included in a toolbar.
   */
  placementPriority?: string;

  /**
   * The list of proposals to display.
   */
  proposals?: string[];

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  right?: margin;

  /**
   * The text in the search input field.
   */
  text?: string;

  /**
   * Text color of the widget.
   */
  textColor?: Color;

  /**
   * The text to be displayed for the action.
   */
  title?: string;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  top?: margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  transform?: Transformation;

  /**
   * Whether the widget is visible.
   */
  visible?: boolean;

  /**
   * The width of the widget.
   */
  width?: dimension;
}

// Slider

/**
 * A widget representing a numeric value as an movable indicator on a horizontal line.
 */
export class Slider extends Widget {

  constructor(properties?: SliderProperties);

  /**
   * Removes all occurrences of *listener* that are bound to *event* and *context* from this widget.
   * If the context parameter is not present, all matching listeners will be removed.
   * If the listener parameter is not present, all listeners that are bound to *event* will be removed.
   * If the event parameter is not present, all listeners for all events will be removed from this widget.
   * Supports chaining.
   * @param event
   * @param listener
   * @param context
   */
  off(event?: string, listener?: Function, context?: this): this;
  off(event: "animationend", listener?: Function, context?: this): this;
  off(event: "animationstart", listener?: Function, context?: this): this;
  off(event: "change:selection", listener?: Function, context?: this): this;
  off(event: "change:{property}", listener?: Function, context?: this): this;
  off(event: "dispose", listener?: Function, context?: this): this;
  off(event: "longpress", listener?: Function, context?: this): this;
  off(event: "pan", listener?: Function, context?: this): this;
  off(event: "pan:down", listener?: Function, context?: this): this;
  off(event: "pan:left", listener?: Function, context?: this): this;
  off(event: "pan:right", listener?: Function, context?: this): this;
  off(event: "pan:up", listener?: Function, context?: this): this;
  off(event: "resize", listener?: Function, context?: this): this;
  off(event: "select", listener?: Function, context?: this): this;
  off(event: "swipe:down", listener?: Function, context?: this): this;
  off(event: "swipe:left", listener?: Function, context?: this): this;
  off(event: "swipe:right", listener?: Function, context?: this): this;
  off(event: "swipe:up", listener?: Function, context?: this): this;
  off(event: "tap", listener?: Function, context?: this): this;
  off(event: "touchcancel", listener?: Function, context?: this): this;
  off(event: "touchend", listener?: Function, context?: this): this;
  off(event: "touchmove", listener?: Function, context?: this): this;
  off(event: "touchstart", listener?: Function, context?: this): this;

  /**
   * Adds a *listener* to the list of functions to be notified when *event* is fired. If the context
   * parameter is not present, the listener will be called in the context of this object. Supports
   * chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  on(event: string, listener: Function, context?: this): this;
  on(event: "animationend", listener: (widget: this, options: Object) => any): this;
  on(event: "animationstart", listener: (widget: this, options: Object) => any): this;
  on(event: "change:selection", listener: (widget: this, selection: number, options: any) => any): this;
  on(event: "change:{property}", listener: (widget: this, value: any, options: Object) => any): this;
  on(event: "dispose", listener: (widget: this) => any): this;
  on(event: "longpress", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "resize", listener: (widget: this, bounds: Bounds, options: Object) => any): this;
  on(event: "select", listener: (widget: SearchAction, selection: number, options: any) => any): this;
  on(event: "swipe:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "tap", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "touchcancel", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchend", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchmove", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchstart", listener: (widget: this, gesture: TouchEvent) => any): this;

  /**
   * Same as `on`, but removes the listener after it has been invoked by an event. Supports chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  once(event: string, listener: Function, context?: this): this;
  once(event: "animationend", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "animationstart", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "change:selection", listener: (widget: this, selection: number, options: any, context?: this) => any): this;
  once(event: "change:{property}", listener: (widget: this, value: any, options: Object, context?: this) => any): this;
  once(event: "dispose", listener: (widget: this, context?: this) => any): this;
  once(event: "longpress", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "resize", listener: (widget: this, bounds: Bounds, options: Object, context?: this) => any): this;
  once(event: "select", listener: (widget: SearchAction, selection: number, options: any, context?: this) => any): this;
  once(event: "swipe:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "tap", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "touchcancel", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchend", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchmove", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchstart", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;

  /**
   * Triggers an event of the given type. All registered listeners will be notified. Additional parameters
   * will be passed to the listeners.
   * @param event
   * @param ...params
   */
  trigger(event: string, ...params: any[]): this;

  /**
   * Gets the current value of the given *property*.
   * @param property
   */
  get(property: string): any;

  /**
   * Background color of the widget.
   */
  get(property: "background"): Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  get(property: "backgroundImage"): Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  get(property: "baseline"): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  get(property: "bottom"): margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  get(property: "bounds"): Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  get(property: "centerX"): offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  get(property: "centerY"): offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  get(property: "class"): string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  get(property: "cornerRadius"): number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  get(property: "elevation"): number;

  /**
   * Whether the widget can be operated.
   */
  get(property: "enabled"): boolean;

  /**
   * The font used for the widget.
   */
  get(property: "font"): Font;

  /**
   * The height of the widget.
   */
  get(property: "height"): dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  get(property: "highlightOnTouch"): boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  get(property: "id"): string;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  get(property: "layoutData"): LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  get(property: "left"): margin;

  /**
   * The maximum value.
   */
  get(property: "maximum"): number;

  /**
   * The minimum value.
   */
  get(property: "minimum"): number;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  get(property: "opacity"): number;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  get(property: "right"): margin;

  /**
   * The actual value.
   */
  get(property: "selection"): number;

  /**
   * Text color of the widget.
   */
  get(property: "textColor"): Color;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  get(property: "top"): margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  get(property: "transform"): Transformation;

  /**
   * Whether the widget is visible.
   */
  get(property: "visible"): boolean;

  /**
   * The width of the widget.
   */
  get(property: "width"): dimension;

  /**
   * Sets the given property. Supports chaining.
   * @param property
   * @param value
   */
  set(property: string, value: any): this;

  /**
   * Sets all key-value pairs in the properties object as widget properties. Supports chaining.
   * @param properties
   */
  set(properties: SliderProperties): this;

  /**
   * Background color of the widget.
   */
  set(property: "background", value: Color): this;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  set(property: "backgroundImage", value: Image): this;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  set(property: "baseline", value: this): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  set(property: "bottom", value: margin): this;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  set(property: "bounds", value: Bounds): this;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  set(property: "centerX", value: offset): this;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  set(property: "centerY", value: offset): this;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  set(property: "class", value: string): this;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  set(property: "cornerRadius", value: number): this;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  set(property: "elevation", value: number): this;

  /**
   * Whether the widget can be operated.
   */
  set(property: "enabled", value: boolean): this;

  /**
   * The font used for the widget.
   */
  set(property: "font", value: Font): this;

  /**
   * The height of the widget.
   */
  set(property: "height", value: dimension): this;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  set(property: "highlightOnTouch", value: boolean): this;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  set(property: "id", value: string): this;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  set(property: "layoutData", value: LayoutData): this;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  set(property: "left", value: margin): this;

  /**
   * The maximum value.
   */
  set(property: "maximum", value: number): this;

  /**
   * The minimum value.
   */
  set(property: "minimum", value: number): this;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  set(property: "opacity", value: number): this;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  set(property: "right", value: margin): this;

  /**
   * The actual value.
   */
  set(property: "selection", value: number): this;

  /**
   * Text color of the widget.
   */
  set(property: "textColor", value: Color): this;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  set(property: "top", value: margin): this;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  set(property: "transform", value: Transformation): this;

  /**
   * Whether the widget is visible.
   */
  set(property: "visible", value: boolean): this;

  /**
   * The width of the widget.
   */
  set(property: "width", value: dimension): this;
}

interface SliderProperties extends WidgetProperties {

  /**
   * Background color of the widget.
   */
  background?: Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  backgroundImage?: Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  baseline?: this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  bottom?: margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  bounds?: Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  centerX?: offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  centerY?: offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  class?: string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  cornerRadius?: number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  elevation?: number;

  /**
   * Whether the widget can be operated.
   */
  enabled?: boolean;

  /**
   * The font used for the widget.
   */
  font?: Font;

  /**
   * The height of the widget.
   */
  height?: dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  highlightOnTouch?: boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  id?: string;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  layoutData?: LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  left?: margin;

  /**
   * The maximum value.
   */
  maximum?: number;

  /**
   * The minimum value.
   */
  minimum?: number;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  opacity?: number;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  right?: margin;

  /**
   * The actual value.
   */
  selection?: number;

  /**
   * Text color of the widget.
   */
  textColor?: Color;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  top?: margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  transform?: Transformation;

  /**
   * Whether the widget is visible.
   */
  visible?: boolean;

  /**
   * The width of the widget.
   */
  width?: dimension;
}

// Switch

/**
 * A switch widget that can be toggled.
 */
export class Switch extends Widget {

  constructor(properties?: SwitchProperties);

  /**
   * Removes all occurrences of *listener* that are bound to *event* and *context* from this widget.
   * If the context parameter is not present, all matching listeners will be removed.
   * If the listener parameter is not present, all listeners that are bound to *event* will be removed.
   * If the event parameter is not present, all listeners for all events will be removed from this widget.
   * Supports chaining.
   * @param event
   * @param listener
   * @param context
   */
  off(event?: string, listener?: Function, context?: this): this;
  off(event: "animationend", listener?: Function, context?: this): this;
  off(event: "animationstart", listener?: Function, context?: this): this;
  off(event: "change:selection", listener?: Function, context?: this): this;
  off(event: "change:{property}", listener?: Function, context?: this): this;
  off(event: "dispose", listener?: Function, context?: this): this;
  off(event: "longpress", listener?: Function, context?: this): this;
  off(event: "pan", listener?: Function, context?: this): this;
  off(event: "pan:down", listener?: Function, context?: this): this;
  off(event: "pan:left", listener?: Function, context?: this): this;
  off(event: "pan:right", listener?: Function, context?: this): this;
  off(event: "pan:up", listener?: Function, context?: this): this;
  off(event: "resize", listener?: Function, context?: this): this;
  off(event: "select", listener?: Function, context?: this): this;
  off(event: "swipe:down", listener?: Function, context?: this): this;
  off(event: "swipe:left", listener?: Function, context?: this): this;
  off(event: "swipe:right", listener?: Function, context?: this): this;
  off(event: "swipe:up", listener?: Function, context?: this): this;
  off(event: "tap", listener?: Function, context?: this): this;
  off(event: "touchcancel", listener?: Function, context?: this): this;
  off(event: "touchend", listener?: Function, context?: this): this;
  off(event: "touchmove", listener?: Function, context?: this): this;
  off(event: "touchstart", listener?: Function, context?: this): this;

  /**
   * Adds a *listener* to the list of functions to be notified when *event* is fired. If the context
   * parameter is not present, the listener will be called in the context of this object. Supports
   * chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  on(event: string, listener: Function, context?: this): this;
  on(event: "animationend", listener: (widget: this, options: Object) => any): this;
  on(event: "animationstart", listener: (widget: this, options: Object) => any): this;
  on(event: "change:selection", listener: (widget: this, selection: boolean, options: any) => any): this;
  on(event: "change:{property}", listener: (widget: this, value: any, options: Object) => any): this;
  on(event: "dispose", listener: (widget: this) => any): this;
  on(event: "longpress", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "resize", listener: (widget: this, bounds: Bounds, options: Object) => any): this;
  on(event: "select", listener: (widget: this, selection: boolean, options: any) => any): this;
  on(event: "swipe:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "tap", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "touchcancel", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchend", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchmove", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchstart", listener: (widget: this, gesture: TouchEvent) => any): this;

  /**
   * Same as `on`, but removes the listener after it has been invoked by an event. Supports chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  once(event: string, listener: Function, context?: this): this;
  once(event: "animationend", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "animationstart", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "change:selection", listener: (widget: this, selection: boolean, options: any, context?: this) => any): this;
  once(event: "change:{property}", listener: (widget: this, value: any, options: Object, context?: this) => any): this;
  once(event: "dispose", listener: (widget: this, context?: this) => any): this;
  once(event: "longpress", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "resize", listener: (widget: this, bounds: Bounds, options: Object, context?: this) => any): this;
  once(event: "select", listener: (widget: this, selection: boolean, options: any, context?: this) => any): this;
  once(event: "swipe:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "tap", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "touchcancel", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchend", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchmove", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchstart", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;

  /**
   * Triggers an event of the given type. All registered listeners will be notified. Additional parameters
   * will be passed to the listeners.
   * @param event
   * @param ...params
   */
  trigger(event: string, ...params: any[]): this;

  /**
   * Gets the current value of the given *property*.
   * @param property
   */
  get(property: string): any;

  /**
   * Background color of the widget.
   */
  get(property: "background"): Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  get(property: "backgroundImage"): Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  get(property: "baseline"): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  get(property: "bottom"): margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  get(property: "bounds"): Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  get(property: "centerX"): offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  get(property: "centerY"): offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  get(property: "class"): string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  get(property: "cornerRadius"): number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  get(property: "elevation"): number;

  /**
   * Whether the widget can be operated.
   */
  get(property: "enabled"): boolean;

  /**
   * The font used for the widget.
   */
  get(property: "font"): Font;

  /**
   * The height of the widget.
   */
  get(property: "height"): dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  get(property: "highlightOnTouch"): boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  get(property: "id"): string;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  get(property: "layoutData"): LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  get(property: "left"): margin;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  get(property: "opacity"): number;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  get(property: "right"): margin;

  /**
   * The checked state of the switch.
   */
  get(property: "selection"): boolean;

  /**
   * Text color of the widget.
   */
  get(property: "textColor"): Color;

  /**
   * The color of the movable thumb, when switched *off*.
   */
  get(property: "thumbOffColor"): Color;

  /**
   * The color of the movable thumb, when switched *on*.
   */
  get(property: "thumbOnColor"): Color;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  get(property: "top"): margin;

  /**
   * The color of the track that holds the thumb, when switched *off*.
   */
  get(property: "trackOffColor"): Color;

  /**
   * The color of the track that holds the thumb, when switched *on*.
   */
  get(property: "trackOnColor"): Color;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  get(property: "transform"): Transformation;

  /**
   * Whether the widget is visible.
   */
  get(property: "visible"): boolean;

  /**
   * The width of the widget.
   */
  get(property: "width"): dimension;

  /**
   * Sets the given property. Supports chaining.
   * @param property
   * @param value
   */
  set(property: string, value: any): this;

  /**
   * Sets all key-value pairs in the properties object as widget properties. Supports chaining.
   * @param properties
   */
  set(properties: SwitchProperties): this;

  /**
   * Background color of the widget.
   */
  set(property: "background", value: Color): this;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  set(property: "backgroundImage", value: Image): this;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  set(property: "baseline", value: this): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  set(property: "bottom", value: margin): this;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  set(property: "bounds", value: Bounds): this;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  set(property: "centerX", value: offset): this;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  set(property: "centerY", value: offset): this;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  set(property: "class", value: string): this;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  set(property: "cornerRadius", value: number): this;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  set(property: "elevation", value: number): this;

  /**
   * Whether the widget can be operated.
   */
  set(property: "enabled", value: boolean): this;

  /**
   * The font used for the widget.
   */
  set(property: "font", value: Font): this;

  /**
   * The height of the widget.
   */
  set(property: "height", value: dimension): this;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  set(property: "highlightOnTouch", value: boolean): this;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  set(property: "id", value: string): this;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  set(property: "layoutData", value: LayoutData): this;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  set(property: "left", value: margin): this;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  set(property: "opacity", value: number): this;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  set(property: "right", value: margin): this;

  /**
   * The checked state of the switch.
   */
  set(property: "selection", value: boolean): this;

  /**
   * Text color of the widget.
   */
  set(property: "textColor", value: Color): this;

  /**
   * The color of the movable thumb, when switched *off*.
   */
  set(property: "thumbOffColor", value: Color): this;

  /**
   * The color of the movable thumb, when switched *on*.
   */
  set(property: "thumbOnColor", value: Color): this;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  set(property: "top", value: margin): this;

  /**
   * The color of the track that holds the thumb, when switched *off*.
   */
  set(property: "trackOffColor", value: Color): this;

  /**
   * The color of the track that holds the thumb, when switched *on*.
   */
  set(property: "trackOnColor", value: Color): this;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  set(property: "transform", value: Transformation): this;

  /**
   * Whether the widget is visible.
   */
  set(property: "visible", value: boolean): this;

  /**
   * The width of the widget.
   */
  set(property: "width", value: dimension): this;
}

interface SwitchProperties extends WidgetProperties {

  /**
   * Background color of the widget.
   */
  background?: Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  backgroundImage?: Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  baseline?: this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  bottom?: margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  bounds?: Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  centerX?: offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  centerY?: offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  class?: string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  cornerRadius?: number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  elevation?: number;

  /**
   * Whether the widget can be operated.
   */
  enabled?: boolean;

  /**
   * The font used for the widget.
   */
  font?: Font;

  /**
   * The height of the widget.
   */
  height?: dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  highlightOnTouch?: boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  id?: string;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  layoutData?: LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  left?: margin;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  opacity?: number;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  right?: margin;

  /**
   * The checked state of the switch.
   */
  selection?: boolean;

  /**
   * Text color of the widget.
   */
  textColor?: Color;

  /**
   * The color of the movable thumb, when switched *off*.
   */
  thumbOffColor?: Color;

  /**
   * The color of the movable thumb, when switched *on*.
   */
  thumbOnColor?: Color;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  top?: margin;

  /**
   * The color of the track that holds the thumb, when switched *off*.
   */
  trackOffColor?: Color;

  /**
   * The color of the track that holds the thumb, when switched *on*.
   */
  trackOnColor?: Color;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  transform?: Transformation;

  /**
   * Whether the widget is visible.
   */
  visible?: boolean;

  /**
   * The width of the widget.
   */
  width?: dimension;
}

// Tab

/**
 * A container representing a single tab of the TabFolder widget.
 */
export class Tab extends Composite {

  constructor(properties?: TabProperties);

  /**
   * Removes all occurrences of *listener* that are bound to *event* and *context* from this widget.
   * If the context parameter is not present, all matching listeners will be removed.
   * If the listener parameter is not present, all listeners that are bound to *event* will be removed.
   * If the event parameter is not present, all listeners for all events will be removed from this widget.
   * Supports chaining.
   * @param event
   * @param listener
   * @param context
   */
  off(event?: string, listener?: Function, context?: this): this;
  off(event: "addchild", listener?: Function, context?: this): this;
  off(event: "animationend", listener?: Function, context?: this): this;
  off(event: "animationstart", listener?: Function, context?: this): this;
  off(event: "change:{property}", listener?: Function, context?: this): this;
  off(event: "dispose", listener?: Function, context?: this): this;
  off(event: "longpress", listener?: Function, context?: this): this;
  off(event: "pan", listener?: Function, context?: this): this;
  off(event: "pan:down", listener?: Function, context?: this): this;
  off(event: "pan:left", listener?: Function, context?: this): this;
  off(event: "pan:right", listener?: Function, context?: this): this;
  off(event: "pan:up", listener?: Function, context?: this): this;
  off(event: "removechild", listener?: Function, context?: this): this;
  off(event: "resize", listener?: Function, context?: this): this;
  off(event: "swipe:down", listener?: Function, context?: this): this;
  off(event: "swipe:left", listener?: Function, context?: this): this;
  off(event: "swipe:right", listener?: Function, context?: this): this;
  off(event: "swipe:up", listener?: Function, context?: this): this;
  off(event: "tap", listener?: Function, context?: this): this;
  off(event: "touchcancel", listener?: Function, context?: this): this;
  off(event: "touchend", listener?: Function, context?: this): this;
  off(event: "touchmove", listener?: Function, context?: this): this;
  off(event: "touchstart", listener?: Function, context?: this): this;

  /**
   * Adds a *listener* to the list of functions to be notified when *event* is fired. If the context
   * parameter is not present, the listener will be called in the context of this object. Supports
   * chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  on(event: string, listener: Function, context?: this): this;
  on(event: "addchild", listener: (widget: this, child: Widget, options: any) => any): this;
  on(event: "animationend", listener: (widget: this, options: Object) => any): this;
  on(event: "animationstart", listener: (widget: this, options: Object) => any): this;
  on(event: "change:{property}", listener: (widget: this, value: any, options: Object) => any): this;
  on(event: "dispose", listener: (widget: this) => any): this;
  on(event: "longpress", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "removechild", listener: (widget: this, child: Widget, options: {index: number}) => any): this;
  on(event: "resize", listener: (widget: this, bounds: Bounds, options: Object) => any): this;
  on(event: "swipe:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "tap", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "touchcancel", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchend", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchmove", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchstart", listener: (widget: this, gesture: TouchEvent) => any): this;

  /**
   * Same as `on`, but removes the listener after it has been invoked by an event. Supports chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  once(event: string, listener: Function, context?: this): this;
  once(event: "addchild", listener: (widget: this, child: Widget, options: any, context?: this) => any): this;
  once(event: "animationend", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "animationstart", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "change:{property}", listener: (widget: this, value: any, options: Object, context?: this) => any): this;
  once(event: "dispose", listener: (widget: this, context?: this) => any): this;
  once(event: "longpress", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "removechild", listener: (widget: this, child: Widget, options: {index: number}, context?: this) => any): this;
  once(event: "resize", listener: (widget: this, bounds: Bounds, options: Object, context?: this) => any): this;
  once(event: "swipe:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "tap", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "touchcancel", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchend", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchmove", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchstart", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;

  /**
   * Triggers an event of the given type. All registered listeners will be notified. Additional parameters
   * will be passed to the listeners.
   * @param event
   * @param ...params
   */
  trigger(event: string, ...params: any[]): this;

  /**
   * Gets the current value of the given *property*.
   * @param property
   */
  get(property: string): any;

  /**
   * Background color of the widget.
   */
  get(property: "background"): Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  get(property: "backgroundImage"): Image;

  /**
   * A badge to attach to the tab. Only supported on iOS.
   */
  get(property: "badge"): string;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  get(property: "baseline"): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  get(property: "bottom"): margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  get(property: "bounds"): Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  get(property: "centerX"): offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  get(property: "centerY"): offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  get(property: "class"): string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  get(property: "cornerRadius"): number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  get(property: "elevation"): number;

  /**
   * Whether the widget can be operated.
   */
  get(property: "enabled"): boolean;

  /**
   * The font used for the widget.
   */
  get(property: "font"): Font;

  /**
   * The height of the widget.
   */
  get(property: "height"): dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  get(property: "highlightOnTouch"): boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  get(property: "id"): string;

  /**
   * An image to be displayed on the tab.
   */
  get(property: "image"): Image;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  get(property: "layoutData"): LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  get(property: "left"): margin;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  get(property: "opacity"): number;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  get(property: "right"): margin;

  /**
   * Text color of the widget.
   */
  get(property: "textColor"): Color;

  /**
   * The title to be displayed on the tab.
   */
  get(property: "title"): string;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  get(property: "top"): margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  get(property: "transform"): Transformation;

  /**
   * Whether the widget is visible.
   */
  get(property: "visible"): boolean;

  /**
   * The width of the widget.
   */
  get(property: "width"): dimension;

  /**
   * Sets the given property. Supports chaining.
   * @param property
   * @param value
   */
  set(property: string, value: any): this;

  /**
   * Sets all key-value pairs in the properties object as widget properties. Supports chaining.
   * @param properties
   */
  set(properties: TabProperties): this;

  /**
   * Background color of the widget.
   */
  set(property: "background", value: Color): this;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  set(property: "backgroundImage", value: Image): this;

  /**
   * A badge to attach to the tab. Only supported on iOS.
   */
  set(property: "badge", value: string): this;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  set(property: "baseline", value: this): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  set(property: "bottom", value: margin): this;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  set(property: "bounds", value: Bounds): this;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  set(property: "centerX", value: offset): this;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  set(property: "centerY", value: offset): this;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  set(property: "class", value: string): this;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  set(property: "cornerRadius", value: number): this;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  set(property: "elevation", value: number): this;

  /**
   * Whether the widget can be operated.
   */
  set(property: "enabled", value: boolean): this;

  /**
   * The font used for the widget.
   */
  set(property: "font", value: Font): this;

  /**
   * The height of the widget.
   */
  set(property: "height", value: dimension): this;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  set(property: "highlightOnTouch", value: boolean): this;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  set(property: "id", value: string): this;

  /**
   * An image to be displayed on the tab.
   */
  set(property: "image", value: Image): this;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  set(property: "layoutData", value: LayoutData): this;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  set(property: "left", value: margin): this;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  set(property: "opacity", value: number): this;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  set(property: "right", value: margin): this;

  /**
   * Text color of the widget.
   */
  set(property: "textColor", value: Color): this;

  /**
   * The title to be displayed on the tab.
   */
  set(property: "title", value: string): this;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  set(property: "top", value: margin): this;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  set(property: "transform", value: Transformation): this;

  /**
   * Whether the widget is visible.
   */
  set(property: "visible", value: boolean): this;

  /**
   * The width of the widget.
   */
  set(property: "width", value: dimension): this;
}

interface TabProperties extends CompositeProperties {

  /**
   * Background color of the widget.
   */
  background?: Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  backgroundImage?: Image;

  /**
   * A badge to attach to the tab. Only supported on iOS.
   */
  badge?: string;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  baseline?: this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  bottom?: margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  bounds?: Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  centerX?: offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  centerY?: offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  class?: string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  cornerRadius?: number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  elevation?: number;

  /**
   * Whether the widget can be operated.
   */
  enabled?: boolean;

  /**
   * The font used for the widget.
   */
  font?: Font;

  /**
   * The height of the widget.
   */
  height?: dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  highlightOnTouch?: boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  id?: string;

  /**
   * An image to be displayed on the tab.
   */
  image?: Image;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  layoutData?: LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  left?: margin;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  opacity?: number;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  right?: margin;

  /**
   * Text color of the widget.
   */
  textColor?: Color;

  /**
   * The title to be displayed on the tab.
   */
  title?: string;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  top?: margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  transform?: Transformation;

  /**
   * Whether the widget is visible.
   */
  visible?: boolean;

  /**
   * The width of the widget.
   */
  width?: dimension;
}

// TabFolder

/**
 * A widget that can switch between [tabs](Tab). Only children of type `Tab` are supported. Since the
 * TabFolder does not compute its own size, the width and height must be defined by the respective
 * layout properties (e.g. either `width` or `left` and `right` must be specified).
 */
export class TabFolder extends Composite {

  constructor(properties?: TabFolderProperties);

  /**
   * Removes all occurrences of *listener* that are bound to *event* and *context* from this widget.
   * If the context parameter is not present, all matching listeners will be removed.
   * If the listener parameter is not present, all listeners that are bound to *event* will be removed.
   * If the event parameter is not present, all listeners for all events will be removed from this widget.
   * Supports chaining.
   * @param event
   * @param listener
   * @param context
   */
  off(event?: string, listener?: Function, context?: this): this;
  off(event: "addchild", listener?: Function, context?: this): this;
  off(event: "animationend", listener?: Function, context?: this): this;
  off(event: "animationstart", listener?: Function, context?: this): this;
  off(event: "change:selection", listener?: Function, context?: this): this;
  off(event: "change:{property}", listener?: Function, context?: this): this;
  off(event: "dispose", listener?: Function, context?: this): this;
  off(event: "longpress", listener?: Function, context?: this): this;
  off(event: "pan", listener?: Function, context?: this): this;
  off(event: "pan:down", listener?: Function, context?: this): this;
  off(event: "pan:left", listener?: Function, context?: this): this;
  off(event: "pan:right", listener?: Function, context?: this): this;
  off(event: "pan:up", listener?: Function, context?: this): this;
  off(event: "removechild", listener?: Function, context?: this): this;
  off(event: "resize", listener?: Function, context?: this): this;
  off(event: "select", listener?: Function, context?: this): this;
  off(event: "swipe:down", listener?: Function, context?: this): this;
  off(event: "swipe:left", listener?: Function, context?: this): this;
  off(event: "swipe:right", listener?: Function, context?: this): this;
  off(event: "swipe:up", listener?: Function, context?: this): this;
  off(event: "tap", listener?: Function, context?: this): this;
  off(event: "touchcancel", listener?: Function, context?: this): this;
  off(event: "touchend", listener?: Function, context?: this): this;
  off(event: "touchmove", listener?: Function, context?: this): this;
  off(event: "touchstart", listener?: Function, context?: this): this;

  /**
   * Adds a *listener* to the list of functions to be notified when *event* is fired. If the context
   * parameter is not present, the listener will be called in the context of this object. Supports
   * chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  on(event: string, listener: Function, context?: this): this;
  on(event: "addchild", listener: (widget: this, child: Widget, options: any) => any): this;
  on(event: "animationend", listener: (widget: this, options: Object) => any): this;
  on(event: "animationstart", listener: (widget: this, options: Object) => any): this;
  on(event: "change:selection", listener: (widget: this, selection: Tab, options: any) => any): this;
  on(event: "change:{property}", listener: (widget: this, value: any, options: Object) => any): this;
  on(event: "dispose", listener: (widget: this) => any): this;
  on(event: "longpress", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "removechild", listener: (widget: this, child: Widget, options: {index: number}) => any): this;
  on(event: "resize", listener: (widget: this, bounds: Bounds, options: Object) => any): this;
  on(event: "select", listener: (widget: this, selection: Tab, options: any) => any): this;
  on(event: "swipe:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "tap", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "touchcancel", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchend", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchmove", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchstart", listener: (widget: this, gesture: TouchEvent) => any): this;

  /**
   * Same as `on`, but removes the listener after it has been invoked by an event. Supports chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  once(event: string, listener: Function, context?: this): this;
  once(event: "addchild", listener: (widget: this, child: Widget, options: any, context?: this) => any): this;
  once(event: "animationend", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "animationstart", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "change:selection", listener: (widget: this, selection: Tab, options: any, context?: this) => any): this;
  once(event: "change:{property}", listener: (widget: this, value: any, options: Object, context?: this) => any): this;
  once(event: "dispose", listener: (widget: this, context?: this) => any): this;
  once(event: "longpress", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "removechild", listener: (widget: this, child: Widget, options: {index: number}, context?: this) => any): this;
  once(event: "resize", listener: (widget: this, bounds: Bounds, options: Object, context?: this) => any): this;
  once(event: "select", listener: (widget: this, selection: Tab, options: any, context?: this) => any): this;
  once(event: "swipe:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "tap", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "touchcancel", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchend", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchmove", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchstart", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;

  /**
   * Triggers an event of the given type. All registered listeners will be notified. Additional parameters
   * will be passed to the listeners.
   * @param event
   * @param ...params
   */
  trigger(event: string, ...params: any[]): this;

  /**
   * Gets the current value of the given *property*.
   * @param property
   */
  get(property: string): any;

  /**
   * Background color of the widget.
   */
  get(property: "background"): Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  get(property: "backgroundImage"): Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  get(property: "baseline"): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  get(property: "bottom"): margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  get(property: "bounds"): Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  get(property: "centerX"): offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  get(property: "centerY"): offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  get(property: "class"): string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  get(property: "cornerRadius"): number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  get(property: "elevation"): number;

  /**
   * Whether the widget can be operated.
   */
  get(property: "enabled"): boolean;

  /**
   * The font used for the widget.
   */
  get(property: "font"): Font;

  /**
   * The height of the widget.
   */
  get(property: "height"): dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  get(property: "highlightOnTouch"): boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  get(property: "id"): string;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  get(property: "layoutData"): LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  get(property: "left"): margin;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  get(property: "opacity"): number;

  /**
   * Enables swiping through tabs.
   */
  get(property: "paging"): boolean;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  get(property: "right"): margin;

  /**
   * The currently selected tab.
   */
  get(property: "selection"): Tab;

  /**
   * The placement of the tab titles. When set to `"hidden"`, the tab bar will not be visible. When set to
   * `"auto"`, the position is platform dependent.
   * @static
   */
  get(property: "tabBarLocation"): string;

  /**
   * Text color of the widget.
   */
  get(property: "textColor"): Color;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  get(property: "top"): margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  get(property: "transform"): Transformation;

  /**
   * Whether the widget is visible.
   */
  get(property: "visible"): boolean;

  /**
   * The width of the widget.
   */
  get(property: "width"): dimension;

  /**
   * Sets the given property. Supports chaining.
   * @param property
   * @param value
   */
  set(property: string, value: any): this;

  /**
   * Sets all key-value pairs in the properties object as widget properties. Supports chaining.
   * @param properties
   */
  set(properties: TabFolderProperties): this;

  /**
   * Background color of the widget.
   */
  set(property: "background", value: Color): this;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  set(property: "backgroundImage", value: Image): this;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  set(property: "baseline", value: this): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  set(property: "bottom", value: margin): this;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  set(property: "bounds", value: Bounds): this;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  set(property: "centerX", value: offset): this;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  set(property: "centerY", value: offset): this;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  set(property: "class", value: string): this;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  set(property: "cornerRadius", value: number): this;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  set(property: "elevation", value: number): this;

  /**
   * Whether the widget can be operated.
   */
  set(property: "enabled", value: boolean): this;

  /**
   * The font used for the widget.
   */
  set(property: "font", value: Font): this;

  /**
   * The height of the widget.
   */
  set(property: "height", value: dimension): this;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  set(property: "highlightOnTouch", value: boolean): this;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  set(property: "id", value: string): this;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  set(property: "layoutData", value: LayoutData): this;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  set(property: "left", value: margin): this;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  set(property: "opacity", value: number): this;

  /**
   * Enables swiping through tabs.
   */
  set(property: "paging", value: boolean): this;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  set(property: "right", value: margin): this;

  /**
   * The currently selected tab.
   */
  set(property: "selection", value: Tab): this;

  /**
   * The placement of the tab titles. When set to `"hidden"`, the tab bar will not be visible. When set to
   * `"auto"`, the position is platform dependent.
   * @static
   */
  set(property: "tabBarLocation", value: string): this;
  set(property: "tabBarLocation", value: "auto"): this;
  set(property: "tabBarLocation", value: "bottom"): this;
  set(property: "tabBarLocation", value: "hidden"): this;
  set(property: "tabBarLocation", value: "top"): this;

  /**
   * Text color of the widget.
   */
  set(property: "textColor", value: Color): this;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  set(property: "top", value: margin): this;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  set(property: "transform", value: Transformation): this;

  /**
   * Whether the widget is visible.
   */
  set(property: "visible", value: boolean): this;

  /**
   * The width of the widget.
   */
  set(property: "width", value: dimension): this;
}

interface TabFolderProperties extends CompositeProperties {

  /**
   * Background color of the widget.
   */
  background?: Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  backgroundImage?: Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  baseline?: this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  bottom?: margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  bounds?: Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  centerX?: offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  centerY?: offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  class?: string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  cornerRadius?: number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  elevation?: number;

  /**
   * Whether the widget can be operated.
   */
  enabled?: boolean;

  /**
   * The font used for the widget.
   */
  font?: Font;

  /**
   * The height of the widget.
   */
  height?: dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  highlightOnTouch?: boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  id?: string;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  layoutData?: LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  left?: margin;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  opacity?: number;

  /**
   * Enables swiping through tabs.
   */
  paging?: boolean;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  right?: margin;

  /**
   * The currently selected tab.
   */
  selection?: Tab;

  /**
   * The placement of the tab titles. When set to `"hidden"`, the tab bar will not be visible. When set to
   * `"auto"`, the position is platform dependent.
   * @static
   */
  tabBarLocation?: string;

  /**
   * Text color of the widget.
   */
  textColor?: Color;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  top?: margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  transform?: Transformation;

  /**
   * Whether the widget is visible.
   */
  visible?: boolean;

  /**
   * The width of the widget.
   */
  width?: dimension;
}

// TextInput

/**
 * A widget that allows to enter text.
 */
export class TextInput extends Widget {

  constructor(properties?: TextInputProperties);

  /**
   * Removes all occurrences of *listener* that are bound to *event* and *context* from this widget.
   * If the context parameter is not present, all matching listeners will be removed.
   * If the listener parameter is not present, all listeners that are bound to *event* will be removed.
   * If the event parameter is not present, all listeners for all events will be removed from this widget.
   * Supports chaining.
   * @param event
   * @param listener
   * @param context
   */
  off(event?: string, listener?: Function, context?: this): this;
  off(event: "accept", listener?: Function, context?: this): this;
  off(event: "animationend", listener?: Function, context?: this): this;
  off(event: "animationstart", listener?: Function, context?: this): this;
  off(event: "blur", listener?: Function, context?: this): this;
  off(event: "change:text", listener?: Function, context?: this): this;
  off(event: "change:{property}", listener?: Function, context?: this): this;
  off(event: "dispose", listener?: Function, context?: this): this;
  off(event: "focus", listener?: Function, context?: this): this;
  off(event: "input", listener?: Function, context?: this): this;
  off(event: "longpress", listener?: Function, context?: this): this;
  off(event: "pan", listener?: Function, context?: this): this;
  off(event: "pan:down", listener?: Function, context?: this): this;
  off(event: "pan:left", listener?: Function, context?: this): this;
  off(event: "pan:right", listener?: Function, context?: this): this;
  off(event: "pan:up", listener?: Function, context?: this): this;
  off(event: "resize", listener?: Function, context?: this): this;
  off(event: "swipe:down", listener?: Function, context?: this): this;
  off(event: "swipe:left", listener?: Function, context?: this): this;
  off(event: "swipe:right", listener?: Function, context?: this): this;
  off(event: "swipe:up", listener?: Function, context?: this): this;
  off(event: "tap", listener?: Function, context?: this): this;
  off(event: "touchcancel", listener?: Function, context?: this): this;
  off(event: "touchend", listener?: Function, context?: this): this;
  off(event: "touchmove", listener?: Function, context?: this): this;
  off(event: "touchstart", listener?: Function, context?: this): this;

  /**
   * Adds a *listener* to the list of functions to be notified when *event* is fired. If the context
   * parameter is not present, the listener will be called in the context of this object. Supports
   * chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  on(event: string, listener: Function, context?: this): this;
  on(event: "accept", listener: (widget: this, text: string, options: any) => any): this;
  on(event: "animationend", listener: (widget: this, options: Object) => any): this;
  on(event: "animationstart", listener: (widget: this, options: Object) => any): this;
  on(event: "blur", listener: (widget: this) => any): this;
  on(event: "change:text", listener: (widget: this, text: string, options: any) => any): this;
  on(event: "change:{property}", listener: (widget: this, value: any, options: Object) => any): this;
  on(event: "dispose", listener: (widget: this) => any): this;
  on(event: "focus", listener: (widget: this) => any): this;
  on(event: "input", listener: (widget: this, text: string, options: any) => any): this;
  on(event: "longpress", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "resize", listener: (widget: this, bounds: Bounds, options: Object) => any): this;
  on(event: "swipe:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "tap", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "touchcancel", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchend", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchmove", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchstart", listener: (widget: this, gesture: TouchEvent) => any): this;

  /**
   * Same as `on`, but removes the listener after it has been invoked by an event. Supports chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  once(event: string, listener: Function, context?: this): this;
  once(event: "accept", listener: (widget: this, text: string, options: any, context?: this) => any): this;
  once(event: "animationend", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "animationstart", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "blur", listener: (widget: this, context?: this) => any): this;
  once(event: "change:text", listener: (widget: this, text: string, options: any, context?: this) => any): this;
  once(event: "change:{property}", listener: (widget: this, value: any, options: Object, context?: this) => any): this;
  once(event: "dispose", listener: (widget: this, context?: this) => any): this;
  once(event: "focus", listener: (widget: this, context?: this) => any): this;
  once(event: "input", listener: (widget: this, text: string, options: any, context?: this) => any): this;
  once(event: "longpress", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "resize", listener: (widget: this, bounds: Bounds, options: Object, context?: this) => any): this;
  once(event: "swipe:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "tap", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "touchcancel", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchend", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchmove", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchstart", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;

  /**
   * Triggers an event of the given type. All registered listeners will be notified. Additional parameters
   * will be passed to the listeners.
   * @param event
   * @param ...params
   */
  trigger(event: string, ...params: any[]): this;

  /**
   * Gets the current value of the given *property*.
   * @param property
   */
  get(property: string): any;

  /**
   * The horizontal alignment of the text.
   */
  get(property: "alignment"): string;

  /**
   * Automatically switch to capital letters after every key pressed.
   */
  get(property: "autoCapitalize"): boolean;

  /**
   * Enables the spell checker and auto-correction feature.
   */
  get(property: "autoCorrect"): boolean;

  /**
   * Background color of the widget.
   */
  get(property: "background"): Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  get(property: "backgroundImage"): Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  get(property: "baseline"): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  get(property: "bottom"): margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  get(property: "bounds"): Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  get(property: "centerX"): offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  get(property: "centerY"): offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  get(property: "class"): string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  get(property: "cornerRadius"): number;

  /**
   * Whether the text can be edited or not.
   */
  get(property: "editable"): boolean;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  get(property: "elevation"): number;

  /**
   * Whether the widget can be operated.
   */
  get(property: "enabled"): boolean;

  /**
   * The font used for the widget.
   */
  get(property: "font"): Font;

  /**
   * The height of the widget.
   */
  get(property: "height"): dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  get(property: "highlightOnTouch"): boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  get(property: "id"): string;

  /**
   * Selects the keyboard type to use for editing this widget.
   */
  get(property: "keyboard"): string;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  get(property: "layoutData"): LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  get(property: "left"): margin;

  /**
   * A hint text that is displayed when the input field is empty.
   */
  get(property: "message"): string;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  get(property: "opacity"): number;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  get(property: "right"): margin;

  /**
   * The text in the input field.
   */
  get(property: "text"): string;

  /**
   * Text color of the widget.
   */
  get(property: "textColor"): Color;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  get(property: "top"): margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  get(property: "transform"): Transformation;

  /**
   * The type of the text widget.
   * @static
   */
  get(property: "type"): string;

  /**
   * Whether the widget is visible.
   */
  get(property: "visible"): boolean;

  /**
   * The width of the widget.
   */
  get(property: "width"): dimension;

  /**
   * Sets the given property. Supports chaining.
   * @param property
   * @param value
   */
  set(property: string, value: any): this;

  /**
   * Sets all key-value pairs in the properties object as widget properties. Supports chaining.
   * @param properties
   */
  set(properties: TextInputProperties): this;

  /**
   * The horizontal alignment of the text.
   */
  set(property: "alignment", value: string): this;
  set(property: "alignment", value: "center"): this;
  set(property: "alignment", value: "left"): this;
  set(property: "alignment", value: "right"): this;

  /**
   * Automatically switch to capital letters after every key pressed.
   */
  set(property: "autoCapitalize", value: boolean): this;

  /**
   * Enables the spell checker and auto-correction feature.
   */
  set(property: "autoCorrect", value: boolean): this;

  /**
   * Background color of the widget.
   */
  set(property: "background", value: Color): this;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  set(property: "backgroundImage", value: Image): this;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  set(property: "baseline", value: this): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  set(property: "bottom", value: margin): this;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  set(property: "bounds", value: Bounds): this;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  set(property: "centerX", value: offset): this;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  set(property: "centerY", value: offset): this;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  set(property: "class", value: string): this;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  set(property: "cornerRadius", value: number): this;

  /**
   * Whether the text can be edited or not.
   */
  set(property: "editable", value: boolean): this;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  set(property: "elevation", value: number): this;

  /**
   * Whether the widget can be operated.
   */
  set(property: "enabled", value: boolean): this;

  /**
   * The font used for the widget.
   */
  set(property: "font", value: Font): this;

  /**
   * The height of the widget.
   */
  set(property: "height", value: dimension): this;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  set(property: "highlightOnTouch", value: boolean): this;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  set(property: "id", value: string): this;

  /**
   * Selects the keyboard type to use for editing this widget.
   */
  set(property: "keyboard", value: string): this;
  set(property: "keyboard", value: "ascii"): this;
  set(property: "keyboard", value: "decimal"): this;
  set(property: "keyboard", value: "default"): this;
  set(property: "keyboard", value: "email"): this;
  set(property: "keyboard", value: "number"): this;
  set(property: "keyboard", value: "numbersAndPunctuation"): this;
  set(property: "keyboard", value: "phone"): this;
  set(property: "keyboard", value: "url"): this;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  set(property: "layoutData", value: LayoutData): this;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  set(property: "left", value: margin): this;

  /**
   * A hint text that is displayed when the input field is empty.
   */
  set(property: "message", value: string): this;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  set(property: "opacity", value: number): this;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  set(property: "right", value: margin): this;

  /**
   * The text in the input field.
   */
  set(property: "text", value: string): this;

  /**
   * Text color of the widget.
   */
  set(property: "textColor", value: Color): this;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  set(property: "top", value: margin): this;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  set(property: "transform", value: Transformation): this;

  /**
   * The type of the text widget.
   * @static
   */
  set(property: "type", value: string): this;
  set(property: "type", value: "default"): this;
  set(property: "type", value: "multiline"): this;
  set(property: "type", value: "password"): this;
  set(property: "type", value: "search"): this;

  /**
   * Whether the widget is visible.
   */
  set(property: "visible", value: boolean): this;

  /**
   * The width of the widget.
   */
  set(property: "width", value: dimension): this;
}

interface TextInputProperties extends WidgetProperties {

  /**
   * The horizontal alignment of the text.
   */
  alignment?: string;

  /**
   * Automatically switch to capital letters after every key pressed.
   */
  autoCapitalize?: boolean;

  /**
   * Enables the spell checker and auto-correction feature.
   */
  autoCorrect?: boolean;

  /**
   * Background color of the widget.
   */
  background?: Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  backgroundImage?: Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  baseline?: this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  bottom?: margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  bounds?: Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  centerX?: offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  centerY?: offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  class?: string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  cornerRadius?: number;

  /**
   * Whether the text can be edited or not.
   */
  editable?: boolean;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  elevation?: number;

  /**
   * Whether the widget can be operated.
   */
  enabled?: boolean;

  /**
   * The font used for the widget.
   */
  font?: Font;

  /**
   * The height of the widget.
   */
  height?: dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  highlightOnTouch?: boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  id?: string;

  /**
   * Selects the keyboard type to use for editing this widget.
   */
  keyboard?: string;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  layoutData?: LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  left?: margin;

  /**
   * A hint text that is displayed when the input field is empty.
   */
  message?: string;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  opacity?: number;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  right?: margin;

  /**
   * The text in the input field.
   */
  text?: string;

  /**
   * Text color of the widget.
   */
  textColor?: Color;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  top?: margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  transform?: Transformation;

  /**
   * The type of the text widget.
   * @static
   */
  type?: string;

  /**
   * Whether the widget is visible.
   */
  visible?: boolean;

  /**
   * The width of the widget.
   */
  width?: dimension;
}

// TextView

/**
 * A widget to display a text. For images, use ImageView.
 */
export class TextView extends Widget {

  constructor(properties?: TextViewProperties);

  /**
   * Removes all occurrences of *listener* that are bound to *event* and *context* from this widget.
   * If the context parameter is not present, all matching listeners will be removed.
   * If the listener parameter is not present, all listeners that are bound to *event* will be removed.
   * If the event parameter is not present, all listeners for all events will be removed from this widget.
   * Supports chaining.
   * @param event
   * @param listener
   * @param context
   */
  off(event?: string, listener?: Function, context?: this): this;
  off(event: "animationend", listener?: Function, context?: this): this;
  off(event: "animationstart", listener?: Function, context?: this): this;
  off(event: "change:{property}", listener?: Function, context?: this): this;
  off(event: "dispose", listener?: Function, context?: this): this;
  off(event: "longpress", listener?: Function, context?: this): this;
  off(event: "pan", listener?: Function, context?: this): this;
  off(event: "pan:down", listener?: Function, context?: this): this;
  off(event: "pan:left", listener?: Function, context?: this): this;
  off(event: "pan:right", listener?: Function, context?: this): this;
  off(event: "pan:up", listener?: Function, context?: this): this;
  off(event: "resize", listener?: Function, context?: this): this;
  off(event: "swipe:down", listener?: Function, context?: this): this;
  off(event: "swipe:left", listener?: Function, context?: this): this;
  off(event: "swipe:right", listener?: Function, context?: this): this;
  off(event: "swipe:up", listener?: Function, context?: this): this;
  off(event: "tap", listener?: Function, context?: this): this;
  off(event: "touchcancel", listener?: Function, context?: this): this;
  off(event: "touchend", listener?: Function, context?: this): this;
  off(event: "touchmove", listener?: Function, context?: this): this;
  off(event: "touchstart", listener?: Function, context?: this): this;

  /**
   * Adds a *listener* to the list of functions to be notified when *event* is fired. If the context
   * parameter is not present, the listener will be called in the context of this object. Supports
   * chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  on(event: string, listener: Function, context?: this): this;
  on(event: "animationend", listener: (widget: this, options: Object) => any): this;
  on(event: "animationstart", listener: (widget: this, options: Object) => any): this;
  on(event: "change:{property}", listener: (widget: this, value: any, options: Object) => any): this;
  on(event: "dispose", listener: (widget: this) => any): this;
  on(event: "longpress", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "resize", listener: (widget: this, bounds: Bounds, options: Object) => any): this;
  on(event: "swipe:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "tap", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "touchcancel", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchend", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchmove", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchstart", listener: (widget: this, gesture: TouchEvent) => any): this;

  /**
   * Same as `on`, but removes the listener after it has been invoked by an event. Supports chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  once(event: string, listener: Function, context?: this): this;
  once(event: "animationend", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "animationstart", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "change:{property}", listener: (widget: this, value: any, options: Object, context?: this) => any): this;
  once(event: "dispose", listener: (widget: this, context?: this) => any): this;
  once(event: "longpress", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "resize", listener: (widget: this, bounds: Bounds, options: Object, context?: this) => any): this;
  once(event: "swipe:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "tap", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "touchcancel", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchend", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchmove", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchstart", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;

  /**
   * Triggers an event of the given type. All registered listeners will be notified. Additional parameters
   * will be passed to the listeners.
   * @param event
   * @param ...params
   */
  trigger(event: string, ...params: any[]): this;

  /**
   * Gets the current value of the given *property*.
   * @param property
   */
  get(property: string): any;

  /**
   * The horizontal alignment of the text.
   */
  get(property: "alignment"): string;

  /**
   * Background color of the widget.
   */
  get(property: "background"): Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  get(property: "backgroundImage"): Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  get(property: "baseline"): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  get(property: "bottom"): margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  get(property: "bounds"): Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  get(property: "centerX"): offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  get(property: "centerY"): offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  get(property: "class"): string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  get(property: "cornerRadius"): number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  get(property: "elevation"): number;

  /**
   * Whether the widget can be operated.
   */
  get(property: "enabled"): boolean;

  /**
   * The font used for the widget.
   */
  get(property: "font"): Font;

  /**
   * The height of the widget.
   */
  get(property: "height"): dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  get(property: "highlightOnTouch"): boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  get(property: "id"): string;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  get(property: "layoutData"): LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  get(property: "left"): margin;

  /**
   * The amount of space between each line of text. The `lineSpacing` property is a factor with a default
   * value of `1.0`.
   */
  get(property: "lineSpacing"): number;

  /**
   * Allows for a subset of HTML tags in the text. Supported tags are: `a`, `del`, `ins`, `b`, `i`,
   * `strong`, `em`, `big`, `small`, `br`. All tags must be closed (e.g. use `<br/>` instead of `<br>`).
   * Nesting tags is currently not supported.
   * @static
   */
  get(property: "markupEnabled"): boolean;

  /**
   * Limit the number of lines to be displayed to the given maximum. `null` disables this limit.
   */
  get(property: "maxLines"): number|Function;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  get(property: "opacity"): number;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  get(property: "right"): margin;

  /**
   * The text to display.
   */
  get(property: "text"): string;

  /**
   * Text color of the widget.
   */
  get(property: "textColor"): Color;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  get(property: "top"): margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  get(property: "transform"): Transformation;

  /**
   * Whether the widget is visible.
   */
  get(property: "visible"): boolean;

  /**
   * The width of the widget.
   */
  get(property: "width"): dimension;

  /**
   * Sets the given property. Supports chaining.
   * @param property
   * @param value
   */
  set(property: string, value: any): this;

  /**
   * Sets all key-value pairs in the properties object as widget properties. Supports chaining.
   * @param properties
   */
  set(properties: TextViewProperties): this;

  /**
   * The horizontal alignment of the text.
   */
  set(property: "alignment", value: string): this;
  set(property: "alignment", value: "center"): this;
  set(property: "alignment", value: "left"): this;
  set(property: "alignment", value: "right"): this;

  /**
   * Background color of the widget.
   */
  set(property: "background", value: Color): this;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  set(property: "backgroundImage", value: Image): this;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  set(property: "baseline", value: this): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  set(property: "bottom", value: margin): this;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  set(property: "bounds", value: Bounds): this;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  set(property: "centerX", value: offset): this;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  set(property: "centerY", value: offset): this;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  set(property: "class", value: string): this;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  set(property: "cornerRadius", value: number): this;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  set(property: "elevation", value: number): this;

  /**
   * Whether the widget can be operated.
   */
  set(property: "enabled", value: boolean): this;

  /**
   * The font used for the widget.
   */
  set(property: "font", value: Font): this;

  /**
   * The height of the widget.
   */
  set(property: "height", value: dimension): this;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  set(property: "highlightOnTouch", value: boolean): this;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  set(property: "id", value: string): this;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  set(property: "layoutData", value: LayoutData): this;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  set(property: "left", value: margin): this;

  /**
   * The amount of space between each line of text. The `lineSpacing` property is a factor with a default
   * value of `1.0`.
   */
  set(property: "lineSpacing", value: number): this;

  /**
   * Allows for a subset of HTML tags in the text. Supported tags are: `a`, `del`, `ins`, `b`, `i`,
   * `strong`, `em`, `big`, `small`, `br`. All tags must be closed (e.g. use `<br/>` instead of `<br>`).
   * Nesting tags is currently not supported.
   * @static
   */
  set(property: "markupEnabled", value: boolean): this;

  /**
   * Limit the number of lines to be displayed to the given maximum. `null` disables this limit.
   */
  set(property: "maxLines", value: number|Function): this;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  set(property: "opacity", value: number): this;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  set(property: "right", value: margin): this;

  /**
   * The text to display.
   */
  set(property: "text", value: string): this;

  /**
   * Text color of the widget.
   */
  set(property: "textColor", value: Color): this;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  set(property: "top", value: margin): this;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  set(property: "transform", value: Transformation): this;

  /**
   * Whether the widget is visible.
   */
  set(property: "visible", value: boolean): this;

  /**
   * The width of the widget.
   */
  set(property: "width", value: dimension): this;
}

interface TextViewProperties extends WidgetProperties {

  /**
   * The horizontal alignment of the text.
   */
  alignment?: string;

  /**
   * Background color of the widget.
   */
  background?: Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  backgroundImage?: Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  baseline?: this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  bottom?: margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  bounds?: Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  centerX?: offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  centerY?: offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  class?: string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  cornerRadius?: number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  elevation?: number;

  /**
   * Whether the widget can be operated.
   */
  enabled?: boolean;

  /**
   * The font used for the widget.
   */
  font?: Font;

  /**
   * The height of the widget.
   */
  height?: dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  highlightOnTouch?: boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  id?: string;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  layoutData?: LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  left?: margin;

  /**
   * The amount of space between each line of text. The `lineSpacing` property is a factor with a default
   * value of `1.0`.
   */
  lineSpacing?: number;

  /**
   * Allows for a subset of HTML tags in the text. Supported tags are: `a`, `del`, `ins`, `b`, `i`,
   * `strong`, `em`, `big`, `small`, `br`. All tags must be closed (e.g. use `<br/>` instead of `<br>`).
   * Nesting tags is currently not supported.
   * @static
   */
  markupEnabled?: boolean;

  /**
   * Limit the number of lines to be displayed to the given maximum. `null` disables this limit.
   */
  maxLines?: number|Function;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  opacity?: number;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  right?: margin;

  /**
   * The text to display.
   */
  text?: string;

  /**
   * Text color of the widget.
   */
  textColor?: Color;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  top?: margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  transform?: Transformation;

  /**
   * Whether the widget is visible.
   */
  visible?: boolean;

  /**
   * The width of the widget.
   */
  width?: dimension;
}

// ToggleButton

/**
 * A push button that "snaps in", i.e. it is selected when pressed and deselected when pressed again.
 */
export class ToggleButton extends Widget {

  constructor(properties?: ToggleButtonProperties);

  /**
   * Removes all occurrences of *listener* that are bound to *event* and *context* from this widget.
   * If the context parameter is not present, all matching listeners will be removed.
   * If the listener parameter is not present, all listeners that are bound to *event* will be removed.
   * If the event parameter is not present, all listeners for all events will be removed from this widget.
   * Supports chaining.
   * @param event
   * @param listener
   * @param context
   */
  off(event?: string, listener?: Function, context?: this): this;
  off(event: "animationend", listener?: Function, context?: this): this;
  off(event: "animationstart", listener?: Function, context?: this): this;
  off(event: "change:selection", listener?: Function, context?: this): this;
  off(event: "change:{property}", listener?: Function, context?: this): this;
  off(event: "dispose", listener?: Function, context?: this): this;
  off(event: "longpress", listener?: Function, context?: this): this;
  off(event: "pan", listener?: Function, context?: this): this;
  off(event: "pan:down", listener?: Function, context?: this): this;
  off(event: "pan:left", listener?: Function, context?: this): this;
  off(event: "pan:right", listener?: Function, context?: this): this;
  off(event: "pan:up", listener?: Function, context?: this): this;
  off(event: "resize", listener?: Function, context?: this): this;
  off(event: "select", listener?: Function, context?: this): this;
  off(event: "swipe:down", listener?: Function, context?: this): this;
  off(event: "swipe:left", listener?: Function, context?: this): this;
  off(event: "swipe:right", listener?: Function, context?: this): this;
  off(event: "swipe:up", listener?: Function, context?: this): this;
  off(event: "tap", listener?: Function, context?: this): this;
  off(event: "touchcancel", listener?: Function, context?: this): this;
  off(event: "touchend", listener?: Function, context?: this): this;
  off(event: "touchmove", listener?: Function, context?: this): this;
  off(event: "touchstart", listener?: Function, context?: this): this;

  /**
   * Adds a *listener* to the list of functions to be notified when *event* is fired. If the context
   * parameter is not present, the listener will be called in the context of this object. Supports
   * chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  on(event: string, listener: Function, context?: this): this;
  on(event: "animationend", listener: (widget: this, options: Object) => any): this;
  on(event: "animationstart", listener: (widget: this, options: Object) => any): this;
  on(event: "change:selection", listener: (widget: this, selection: boolean, options: any) => any): this;
  on(event: "change:{property}", listener: (widget: this, value: any, options: Object) => any): this;
  on(event: "dispose", listener: (widget: this) => any): this;
  on(event: "longpress", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "resize", listener: (widget: this, bounds: Bounds, options: Object) => any): this;
  on(event: "select", listener: (widget: this, selection: boolean, options: any) => any): this;
  on(event: "swipe:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "tap", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "touchcancel", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchend", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchmove", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchstart", listener: (widget: this, gesture: TouchEvent) => any): this;

  /**
   * Same as `on`, but removes the listener after it has been invoked by an event. Supports chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  once(event: string, listener: Function, context?: this): this;
  once(event: "animationend", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "animationstart", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "change:selection", listener: (widget: this, selection: boolean, options: any, context?: this) => any): this;
  once(event: "change:{property}", listener: (widget: this, value: any, options: Object, context?: this) => any): this;
  once(event: "dispose", listener: (widget: this, context?: this) => any): this;
  once(event: "longpress", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "resize", listener: (widget: this, bounds: Bounds, options: Object, context?: this) => any): this;
  once(event: "select", listener: (widget: this, selection: boolean, options: any, context?: this) => any): this;
  once(event: "swipe:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "tap", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "touchcancel", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchend", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchmove", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchstart", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;

  /**
   * Triggers an event of the given type. All registered listeners will be notified. Additional parameters
   * will be passed to the listeners.
   * @param event
   * @param ...params
   */
  trigger(event: string, ...params: any[]): this;

  /**
   * Gets the current value of the given *property*.
   * @param property
   */
  get(property: string): any;

  /**
   * The horizontal alignment of the button text.
   */
  get(property: "alignment"): string;

  /**
   * Background color of the widget.
   */
  get(property: "background"): Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  get(property: "backgroundImage"): Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  get(property: "baseline"): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  get(property: "bottom"): margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  get(property: "bounds"): Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  get(property: "centerX"): offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  get(property: "centerY"): offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  get(property: "class"): string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  get(property: "cornerRadius"): number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  get(property: "elevation"): number;

  /**
   * Whether the widget can be operated.
   */
  get(property: "enabled"): boolean;

  /**
   * The font used for the widget.
   */
  get(property: "font"): Font;

  /**
   * The height of the widget.
   */
  get(property: "height"): dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  get(property: "highlightOnTouch"): boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  get(property: "id"): string;

  /**
   * An image to be displayed on the button.
   */
  get(property: "image"): Image;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  get(property: "layoutData"): LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  get(property: "left"): margin;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  get(property: "opacity"): number;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  get(property: "right"): margin;

  /**
   * The selection state of the toggle button.
   */
  get(property: "selection"): boolean;

  /**
   * The button's label text.
   */
  get(property: "text"): string;

  /**
   * Text color of the widget.
   */
  get(property: "textColor"): Color;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  get(property: "top"): margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  get(property: "transform"): Transformation;

  /**
   * Whether the widget is visible.
   */
  get(property: "visible"): boolean;

  /**
   * The width of the widget.
   */
  get(property: "width"): dimension;

  /**
   * Sets the given property. Supports chaining.
   * @param property
   * @param value
   */
  set(property: string, value: any): this;

  /**
   * Sets all key-value pairs in the properties object as widget properties. Supports chaining.
   * @param properties
   */
  set(properties: ToggleButtonProperties): this;

  /**
   * The horizontal alignment of the button text.
   */
  set(property: "alignment", value: string): this;
  set(property: "alignment", value: "center"): this;
  set(property: "alignment", value: "left"): this;
  set(property: "alignment", value: "right"): this;

  /**
   * Background color of the widget.
   */
  set(property: "background", value: Color): this;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  set(property: "backgroundImage", value: Image): this;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  set(property: "baseline", value: this): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  set(property: "bottom", value: margin): this;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  set(property: "bounds", value: Bounds): this;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  set(property: "centerX", value: offset): this;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  set(property: "centerY", value: offset): this;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  set(property: "class", value: string): this;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  set(property: "cornerRadius", value: number): this;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  set(property: "elevation", value: number): this;

  /**
   * Whether the widget can be operated.
   */
  set(property: "enabled", value: boolean): this;

  /**
   * The font used for the widget.
   */
  set(property: "font", value: Font): this;

  /**
   * The height of the widget.
   */
  set(property: "height", value: dimension): this;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  set(property: "highlightOnTouch", value: boolean): this;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  set(property: "id", value: string): this;

  /**
   * An image to be displayed on the button.
   */
  set(property: "image", value: Image): this;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  set(property: "layoutData", value: LayoutData): this;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  set(property: "left", value: margin): this;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  set(property: "opacity", value: number): this;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  set(property: "right", value: margin): this;

  /**
   * The selection state of the toggle button.
   */
  set(property: "selection", value: boolean): this;

  /**
   * The button's label text.
   */
  set(property: "text", value: string): this;

  /**
   * Text color of the widget.
   */
  set(property: "textColor", value: Color): this;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  set(property: "top", value: margin): this;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  set(property: "transform", value: Transformation): this;

  /**
   * Whether the widget is visible.
   */
  set(property: "visible", value: boolean): this;

  /**
   * The width of the widget.
   */
  set(property: "width", value: dimension): this;
}

interface ToggleButtonProperties extends WidgetProperties {

  /**
   * The horizontal alignment of the button text.
   */
  alignment?: string;

  /**
   * Background color of the widget.
   */
  background?: Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  backgroundImage?: Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  baseline?: this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  bottom?: margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  bounds?: Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  centerX?: offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  centerY?: offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  class?: string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  cornerRadius?: number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  elevation?: number;

  /**
   * Whether the widget can be operated.
   */
  enabled?: boolean;

  /**
   * The font used for the widget.
   */
  font?: Font;

  /**
   * The height of the widget.
   */
  height?: dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  highlightOnTouch?: boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  id?: string;

  /**
   * An image to be displayed on the button.
   */
  image?: Image;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  layoutData?: LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  left?: margin;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  opacity?: number;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  right?: margin;

  /**
   * The selection state of the toggle button.
   */
  selection?: boolean;

  /**
   * The button's label text.
   */
  text?: string;

  /**
   * Text color of the widget.
   */
  textColor?: Color;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  top?: margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  transform?: Transformation;

  /**
   * Whether the widget is visible.
   */
  visible?: boolean;

  /**
   * The width of the widget.
   */
  width?: dimension;
}

// Video

/**
 * A widget that plays a video from a URL.
 */
export class Video extends Widget {

  constructor(properties?: VideoProperties);

  /**
   * Removes all occurrences of *listener* that are bound to *event* and *context* from this widget.
   * If the context parameter is not present, all matching listeners will be removed.
   * If the listener parameter is not present, all listeners that are bound to *event* will be removed.
   * If the event parameter is not present, all listeners for all events will be removed from this widget.
   * Supports chaining.
   * @param event
   * @param listener
   * @param context
   */
  off(event?: string, listener?: Function, context?: this): this;
  off(event: "animationend", listener?: Function, context?: this): this;
  off(event: "animationstart", listener?: Function, context?: this): this;
  off(event: "change:{property}", listener?: Function, context?: this): this;
  off(event: "dispose", listener?: Function, context?: this): this;
  off(event: "longpress", listener?: Function, context?: this): this;
  off(event: "pan", listener?: Function, context?: this): this;
  off(event: "pan:down", listener?: Function, context?: this): this;
  off(event: "pan:left", listener?: Function, context?: this): this;
  off(event: "pan:right", listener?: Function, context?: this): this;
  off(event: "pan:up", listener?: Function, context?: this): this;
  off(event: "resize", listener?: Function, context?: this): this;
  off(event: "swipe:down", listener?: Function, context?: this): this;
  off(event: "swipe:left", listener?: Function, context?: this): this;
  off(event: "swipe:right", listener?: Function, context?: this): this;
  off(event: "swipe:up", listener?: Function, context?: this): this;
  off(event: "tap", listener?: Function, context?: this): this;
  off(event: "touchcancel", listener?: Function, context?: this): this;
  off(event: "touchend", listener?: Function, context?: this): this;
  off(event: "touchmove", listener?: Function, context?: this): this;
  off(event: "touchstart", listener?: Function, context?: this): this;

  /**
   * Adds a *listener* to the list of functions to be notified when *event* is fired. If the context
   * parameter is not present, the listener will be called in the context of this object. Supports
   * chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  on(event: string, listener: Function, context?: this): this;
  on(event: "animationend", listener: (widget: this, options: Object) => any): this;
  on(event: "animationstart", listener: (widget: this, options: Object) => any): this;
  on(event: "change:{property}", listener: (widget: this, value: any, options: Object) => any): this;
  on(event: "dispose", listener: (widget: this) => any): this;
  on(event: "longpress", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "resize", listener: (widget: this, bounds: Bounds, options: Object) => any): this;
  on(event: "swipe:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "tap", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "touchcancel", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchend", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchmove", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchstart", listener: (widget: this, gesture: TouchEvent) => any): this;

  /**
   * Same as `on`, but removes the listener after it has been invoked by an event. Supports chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  once(event: string, listener: Function, context?: this): this;
  once(event: "animationend", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "animationstart", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "change:{property}", listener: (widget: this, value: any, options: Object, context?: this) => any): this;
  once(event: "dispose", listener: (widget: this, context?: this) => any): this;
  once(event: "longpress", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "resize", listener: (widget: this, bounds: Bounds, options: Object, context?: this) => any): this;
  once(event: "swipe:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "tap", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "touchcancel", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchend", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchmove", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchstart", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;

  /**
   * Triggers an event of the given type. All registered listeners will be notified. Additional parameters
   * will be passed to the listeners.
   * @param event
   * @param ...params
   */
  trigger(event: string, ...params: any[]): this;

  /**
   * Gets the current value of the given *property*.
   * @param property
   */
  get(property: string): any;

  /**
   * Background color of the widget.
   */
  get(property: "background"): Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  get(property: "backgroundImage"): Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  get(property: "baseline"): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  get(property: "bottom"): margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  get(property: "bounds"): Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  get(property: "centerX"): offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  get(property: "centerY"): offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  get(property: "class"): string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  get(property: "cornerRadius"): number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  get(property: "elevation"): number;

  /**
   * Whether the widget can be operated.
   */
  get(property: "enabled"): boolean;

  /**
   * The font used for the widget.
   */
  get(property: "font"): Font;

  /**
   * The height of the widget.
   */
  get(property: "height"): dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  get(property: "highlightOnTouch"): boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  get(property: "id"): string;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  get(property: "layoutData"): LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  get(property: "left"): margin;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  get(property: "opacity"): number;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  get(property: "right"): margin;

  /**
   * Text color of the widget.
   */
  get(property: "textColor"): Color;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  get(property: "top"): margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  get(property: "transform"): Transformation;

  /**
   * The URL of the video to play.
   */
  get(property: "url"): string;

  /**
   * Whether the widget is visible.
   */
  get(property: "visible"): boolean;

  /**
   * The width of the widget.
   */
  get(property: "width"): dimension;

  /**
   * Sets the given property. Supports chaining.
   * @param property
   * @param value
   */
  set(property: string, value: any): this;

  /**
   * Sets all key-value pairs in the properties object as widget properties. Supports chaining.
   * @param properties
   */
  set(properties: VideoProperties): this;

  /**
   * Background color of the widget.
   */
  set(property: "background", value: Color): this;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  set(property: "backgroundImage", value: Image): this;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  set(property: "baseline", value: this): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  set(property: "bottom", value: margin): this;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  set(property: "bounds", value: Bounds): this;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  set(property: "centerX", value: offset): this;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  set(property: "centerY", value: offset): this;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  set(property: "class", value: string): this;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  set(property: "cornerRadius", value: number): this;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  set(property: "elevation", value: number): this;

  /**
   * Whether the widget can be operated.
   */
  set(property: "enabled", value: boolean): this;

  /**
   * The font used for the widget.
   */
  set(property: "font", value: Font): this;

  /**
   * The height of the widget.
   */
  set(property: "height", value: dimension): this;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  set(property: "highlightOnTouch", value: boolean): this;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  set(property: "id", value: string): this;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  set(property: "layoutData", value: LayoutData): this;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  set(property: "left", value: margin): this;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  set(property: "opacity", value: number): this;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  set(property: "right", value: margin): this;

  /**
   * Text color of the widget.
   */
  set(property: "textColor", value: Color): this;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  set(property: "top", value: margin): this;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  set(property: "transform", value: Transformation): this;

  /**
   * The URL of the video to play.
   */
  set(property: "url", value: string): this;

  /**
   * Whether the widget is visible.
   */
  set(property: "visible", value: boolean): this;

  /**
   * The width of the widget.
   */
  set(property: "width", value: dimension): this;
}

interface VideoProperties extends WidgetProperties {

  /**
   * Background color of the widget.
   */
  background?: Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  backgroundImage?: Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  baseline?: this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  bottom?: margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  bounds?: Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  centerX?: offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  centerY?: offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  class?: string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  cornerRadius?: number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  elevation?: number;

  /**
   * Whether the widget can be operated.
   */
  enabled?: boolean;

  /**
   * The font used for the widget.
   */
  font?: Font;

  /**
   * The height of the widget.
   */
  height?: dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  highlightOnTouch?: boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  id?: string;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  layoutData?: LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  left?: margin;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  opacity?: number;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  right?: margin;

  /**
   * Text color of the widget.
   */
  textColor?: Color;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  top?: margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  transform?: Transformation;

  /**
   * The URL of the video to play.
   */
  url?: string;

  /**
   * Whether the widget is visible.
   */
  visible?: boolean;

  /**
   * The width of the widget.
   */
  width?: dimension;
}

// WebView

/**
 * A widget that can display a web page. Since this widget requires a lot of recourses it's recommended
 * to have no more than one instance at a time.
 */
export class WebView extends Widget {

  constructor(properties?: WebViewProperties);

  /**
   * Removes all occurrences of *listener* that are bound to *event* and *context* from this widget.
   * If the context parameter is not present, all matching listeners will be removed.
   * If the listener parameter is not present, all listeners that are bound to *event* will be removed.
   * If the event parameter is not present, all listeners for all events will be removed from this widget.
   * Supports chaining.
   * @param event
   * @param listener
   * @param context
   */
  off(event?: string, listener?: Function, context?: this): this;
  off(event: "animationend", listener?: Function, context?: this): this;
  off(event: "animationstart", listener?: Function, context?: this): this;
  off(event: "change:{property}", listener?: Function, context?: this): this;
  off(event: "dispose", listener?: Function, context?: this): this;
  off(event: "load", listener?: Function, context?: this): this;
  off(event: "longpress", listener?: Function, context?: this): this;
  off(event: "navigate", listener?: Function, context?: this): this;
  off(event: "pan", listener?: Function, context?: this): this;
  off(event: "pan:down", listener?: Function, context?: this): this;
  off(event: "pan:left", listener?: Function, context?: this): this;
  off(event: "pan:right", listener?: Function, context?: this): this;
  off(event: "pan:up", listener?: Function, context?: this): this;
  off(event: "resize", listener?: Function, context?: this): this;
  off(event: "swipe:down", listener?: Function, context?: this): this;
  off(event: "swipe:left", listener?: Function, context?: this): this;
  off(event: "swipe:right", listener?: Function, context?: this): this;
  off(event: "swipe:up", listener?: Function, context?: this): this;
  off(event: "tap", listener?: Function, context?: this): this;
  off(event: "touchcancel", listener?: Function, context?: this): this;
  off(event: "touchend", listener?: Function, context?: this): this;
  off(event: "touchmove", listener?: Function, context?: this): this;
  off(event: "touchstart", listener?: Function, context?: this): this;

  /**
   * Adds a *listener* to the list of functions to be notified when *event* is fired. If the context
   * parameter is not present, the listener will be called in the context of this object. Supports
   * chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  on(event: string, listener: Function, context?: this): this;
  on(event: "animationend", listener: (widget: this, options: Object) => any): this;
  on(event: "animationstart", listener: (widget: this, options: Object) => any): this;
  on(event: "change:{property}", listener: (widget: this, value: any, options: Object) => any): this;
  on(event: "dispose", listener: (widget: this) => any): this;
  on(event: "load", listener: (widget: this) => any): this;
  on(event: "longpress", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "navigate", listener: (widget: this, event: any) => any): this;
  on(event: "pan", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "resize", listener: (widget: this, bounds: Bounds, options: Object) => any): this;
  on(event: "swipe:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "tap", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "touchcancel", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchend", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchmove", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchstart", listener: (widget: this, gesture: TouchEvent) => any): this;

  /**
   * Same as `on`, but removes the listener after it has been invoked by an event. Supports chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  once(event: string, listener: Function, context?: this): this;
  once(event: "animationend", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "animationstart", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "change:{property}", listener: (widget: this, value: any, options: Object, context?: this) => any): this;
  once(event: "dispose", listener: (widget: this, context?: this) => any): this;
  once(event: "load", listener: (widget: this, context?: this) => any): this;
  once(event: "longpress", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "navigate", listener: (widget: this, event: any, context?: this) => any): this;
  once(event: "pan", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "resize", listener: (widget: this, bounds: Bounds, options: Object, context?: this) => any): this;
  once(event: "swipe:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "tap", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "touchcancel", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchend", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchmove", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchstart", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;

  /**
   * Triggers an event of the given type. All registered listeners will be notified. Additional parameters
   * will be passed to the listeners.
   * @param event
   * @param ...params
   */
  trigger(event: string, ...params: any[]): this;

  /**
   * Gets the current value of the given *property*.
   * @param property
   */
  get(property: string): any;

  /**
   * Background color of the widget.
   */
  get(property: "background"): Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  get(property: "backgroundImage"): Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  get(property: "baseline"): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  get(property: "bottom"): margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  get(property: "bounds"): Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  get(property: "centerX"): offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  get(property: "centerY"): offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  get(property: "class"): string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  get(property: "cornerRadius"): number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  get(property: "elevation"): number;

  /**
   * Whether the widget can be operated.
   */
  get(property: "enabled"): boolean;

  /**
   * The font used for the widget.
   */
  get(property: "font"): Font;

  /**
   * The height of the widget.
   */
  get(property: "height"): dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  get(property: "highlightOnTouch"): boolean;

  /**
   * A complete HTML document to display. Always returns the last set value.
   */
  get(property: "html"): string;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  get(property: "id"): string;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  get(property: "layoutData"): LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  get(property: "left"): margin;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  get(property: "opacity"): number;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  get(property: "right"): margin;

  /**
   * Text color of the widget.
   */
  get(property: "textColor"): Color;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  get(property: "top"): margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  get(property: "transform"): Transformation;

  /**
   * The URL of the web page to display. Relative URLs are resolved relative to 'package.json'. Returns
   * empty string when content from *html* property is displayed.
   */
  get(property: "url"): string;

  /**
   * Whether the widget is visible.
   */
  get(property: "visible"): boolean;

  /**
   * The width of the widget.
   */
  get(property: "width"): dimension;

  /**
   * Sets the given property. Supports chaining.
   * @param property
   * @param value
   */
  set(property: string, value: any): this;

  /**
   * Sets all key-value pairs in the properties object as widget properties. Supports chaining.
   * @param properties
   */
  set(properties: WebViewProperties): this;

  /**
   * Background color of the widget.
   */
  set(property: "background", value: Color): this;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  set(property: "backgroundImage", value: Image): this;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  set(property: "baseline", value: this): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  set(property: "bottom", value: margin): this;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  set(property: "bounds", value: Bounds): this;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  set(property: "centerX", value: offset): this;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  set(property: "centerY", value: offset): this;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  set(property: "class", value: string): this;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  set(property: "cornerRadius", value: number): this;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  set(property: "elevation", value: number): this;

  /**
   * Whether the widget can be operated.
   */
  set(property: "enabled", value: boolean): this;

  /**
   * The font used for the widget.
   */
  set(property: "font", value: Font): this;

  /**
   * The height of the widget.
   */
  set(property: "height", value: dimension): this;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  set(property: "highlightOnTouch", value: boolean): this;

  /**
   * A complete HTML document to display. Always returns the last set value.
   */
  set(property: "html", value: string): this;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  set(property: "id", value: string): this;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  set(property: "layoutData", value: LayoutData): this;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  set(property: "left", value: margin): this;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  set(property: "opacity", value: number): this;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  set(property: "right", value: margin): this;

  /**
   * Text color of the widget.
   */
  set(property: "textColor", value: Color): this;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  set(property: "top", value: margin): this;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  set(property: "transform", value: Transformation): this;

  /**
   * The URL of the web page to display. Relative URLs are resolved relative to 'package.json'. Returns
   * empty string when content from *html* property is displayed.
   */
  set(property: "url", value: string): this;

  /**
   * Whether the widget is visible.
   */
  set(property: "visible", value: boolean): this;

  /**
   * The width of the widget.
   */
  set(property: "width", value: dimension): this;
}

interface WebViewProperties extends WidgetProperties {

  /**
   * Background color of the widget.
   */
  background?: Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  backgroundImage?: Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  baseline?: this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  bottom?: margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  bounds?: Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  centerX?: offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  centerY?: offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  class?: string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  cornerRadius?: number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  elevation?: number;

  /**
   * Whether the widget can be operated.
   */
  enabled?: boolean;

  /**
   * The font used for the widget.
   */
  font?: Font;

  /**
   * The height of the widget.
   */
  height?: dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  highlightOnTouch?: boolean;

  /**
   * A complete HTML document to display. Always returns the last set value.
   */
  html?: string;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  id?: string;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  layoutData?: LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  left?: margin;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  opacity?: number;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  right?: margin;

  /**
   * Text color of the widget.
   */
  textColor?: Color;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  top?: margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  transform?: Transformation;

  /**
   * The URL of the web page to display. Relative URLs are resolved relative to 'package.json'. Returns
   * empty string when content from *html* property is displayed.
   */
  url?: string;

  /**
   * Whether the widget is visible.
   */
  visible?: boolean;

  /**
   * The width of the widget.
   */
  width?: dimension;
}

// Widget

/**
 * Base class for all widgets
 */
export class Widget {

  constructor(properties?: WidgetProperties);

  /**
   * An application-wide unique identifier automatically assigned to all widgets on creation. Do not
   * change it.
   */
  cid: string;

  /**
   * Provides convenient access to the list of class names set to this widget. Class names can either be
   * set using the `class` property or by modifying the `classList` directly.
   */
  classList: string[];

  /**
   * Direct access to the value of the property of the same name. May be used instead of
   * `widget.get("id");` Do not use this field to change the value, instead use `widget.set("id", id);`.
   */
  id: string;

  /**
   * The widget type without the 'tabris' namespace.
   */
  type: string;

  /**
   * Starts an animation that transforms the given properties from their current values to the given ones.
   * Supported properties are *transform* and *opacity*. Supported options are:
   * - *delay* - time until the animation starts in ms, defaults to `0`
   * - *duration* - in ms,
   * - *easing* - one of `linear`, `ease-in`, `ease-out`, `ease-in-out`
   * - *repeat* - number of times to repeat the animation, defaults to `0`
   * - *reverse* - `true` to alternate the direction of the animation on every repeat.
   * - *name* - no effect, but will be given in animation events
   * @param properties The properties and target values to animate.
   * @param options Configures the animation itself.
   */
  animate(properties: Object, options: Object): void;

  /**
   * Appends this widget to the given parent. The parent widget must support children (extending
   * *Composite*). If the widget already has a parent, it is removed from the old parent.
   * @param parent 
   */
  appendTo(parent: Composite): this;

  /**
   * Applies the given properties to all descendants that match the associated selector(s).
   * @param properties An object in the format `{Selector: {property: value, property: value, ... }, Selector: ...}`
   */
  apply(properties: Object): this;

  /**
   * Returns a (possibly empty) collection of all children of this widget.
   */
  children(): WidgetCollection;

  /**
   * Returns a (possibly empty) collection of all children of this widget that match the selector.
   * @param selector 
   */
  children(selector: Selector): WidgetCollection;

  /**
   * Removes this widget from its parent and destroys it. Also disposes of all its children. Triggers a
   * `remove` event on the parent and a `dispose` event on itself. The widget can no longer be used.
   */
  dispose(): void;

  /**
   * Returns a (possibly empty) collection of all descendants of this widget.
   */
  find(): WidgetCollection;

  /**
   * Returns a (possibly empty) collection of all descendants of this widget that match the selector.
   * @param selector 
   */
  find(selector: Selector): WidgetCollection;

  /**
   * Inserts this widget directly after the given widget. If the widget already has a parent, it is
   * removed from the old parent.
   * @param widget 
   */
  insertAfter(widget: this): this;

  /**
   * Inserts this widget directly before the given widget. If the widget already has a parent, it is
   * removed from the old parent.
   * @param widget 
   */
  insertBefore(widget: this): this;

  /**
   * Returns `true` if the widget has been disposed, otherwise `false`.
   */
  isDisposed(): boolean;

  /**
   * Returns the parent of this widget.
   */
  parent(): Widget;

  /**
   * Returns a (possibly empty) collection of all siblings of this widget.
   */
  siblings(): WidgetCollection;

  /**
   * Returns a (possibly empty) collection of all siblings of this widget that match the selector.
   * @param selector 
   */
  siblings(selector: Selector): WidgetCollection;

  /**
   * Removes all occurrences of *listener* that are bound to *event* and *context* from this widget.
   * If the context parameter is not present, all matching listeners will be removed.
   * If the listener parameter is not present, all listeners that are bound to *event* will be removed.
   * If the event parameter is not present, all listeners for all events will be removed from this widget.
   * Supports chaining.
   * @param event
   * @param listener
   * @param context
   */
  off(event?: string, listener?: Function, context?: this): this;
  off(event: "animationend", listener?: Function, context?: this): this;
  off(event: "animationstart", listener?: Function, context?: this): this;
  off(event: "change:{property}", listener?: Function, context?: this): this;
  off(event: "dispose", listener?: Function, context?: this): this;
  off(event: "longpress", listener?: Function, context?: this): this;
  off(event: "pan", listener?: Function, context?: this): this;
  off(event: "pan:down", listener?: Function, context?: this): this;
  off(event: "pan:left", listener?: Function, context?: this): this;
  off(event: "pan:right", listener?: Function, context?: this): this;
  off(event: "pan:up", listener?: Function, context?: this): this;
  off(event: "resize", listener?: Function, context?: this): this;
  off(event: "swipe:down", listener?: Function, context?: this): this;
  off(event: "swipe:left", listener?: Function, context?: this): this;
  off(event: "swipe:right", listener?: Function, context?: this): this;
  off(event: "swipe:up", listener?: Function, context?: this): this;
  off(event: "tap", listener?: Function, context?: this): this;
  off(event: "touchcancel", listener?: Function, context?: this): this;
  off(event: "touchend", listener?: Function, context?: this): this;
  off(event: "touchmove", listener?: Function, context?: this): this;
  off(event: "touchstart", listener?: Function, context?: this): this;

  /**
   * Adds a *listener* to the list of functions to be notified when *event* is fired. If the context
   * parameter is not present, the listener will be called in the context of this object. Supports
   * chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  on(event: string, listener: Function, context?: this): this;
  on(event: "animationend", listener: (widget: this, options: Object) => any): this;
  on(event: "animationstart", listener: (widget: this, options: Object) => any): this;
  on(event: "change:{property}", listener: (widget: this, value: any, options: Object) => any): this;
  on(event: "dispose", listener: (widget: this) => any): this;
  on(event: "longpress", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "resize", listener: (widget: this, bounds: Bounds, options: Object) => any): this;
  on(event: "swipe:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "tap", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "touchcancel", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchend", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchmove", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchstart", listener: (widget: this, gesture: TouchEvent) => any): this;

  /**
   * Same as `on`, but removes the listener after it has been invoked by an event. Supports chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  once(event: string, listener: Function, context?: this): this;
  once(event: "animationend", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "animationstart", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "change:{property}", listener: (widget: this, value: any, options: Object, context?: this) => any): this;
  once(event: "dispose", listener: (widget: this, context?: this) => any): this;
  once(event: "longpress", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "resize", listener: (widget: this, bounds: Bounds, options: Object, context?: this) => any): this;
  once(event: "swipe:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "tap", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "touchcancel", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchend", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchmove", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchstart", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;

  /**
   * Triggers an event of the given type. All registered listeners will be notified. Additional parameters
   * will be passed to the listeners.
   * @param event
   * @param ...params
   */
  trigger(event: string, ...params: any[]): this;

  /**
   * Gets the current value of the given *property*.
   * @param property
   */
  get(property: string): any;

  /**
   * Background color of the widget.
   */
  get(property: "background"): Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  get(property: "backgroundImage"): Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  get(property: "baseline"): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  get(property: "bottom"): margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  get(property: "bounds"): Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  get(property: "centerX"): offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  get(property: "centerY"): offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  get(property: "class"): string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  get(property: "cornerRadius"): number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  get(property: "elevation"): number;

  /**
   * Whether the widget can be operated.
   */
  get(property: "enabled"): boolean;

  /**
   * The font used for the widget.
   */
  get(property: "font"): Font;

  /**
   * The height of the widget.
   */
  get(property: "height"): dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  get(property: "highlightOnTouch"): boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  get(property: "id"): string;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  get(property: "layoutData"): LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  get(property: "left"): margin;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  get(property: "opacity"): number;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  get(property: "right"): margin;

  /**
   * Text color of the widget.
   */
  get(property: "textColor"): Color;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  get(property: "top"): margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  get(property: "transform"): Transformation;

  /**
   * Whether the widget is visible.
   */
  get(property: "visible"): boolean;

  /**
   * The width of the widget.
   */
  get(property: "width"): dimension;

  /**
   * Sets the given property. Supports chaining.
   * @param property
   * @param value
   */
  set(property: string, value: any): this;

  /**
   * Sets all key-value pairs in the properties object as widget properties. Supports chaining.
   * @param properties
   */
  set(properties: WidgetProperties): this;

  /**
   * Background color of the widget.
   */
  set(property: "background", value: Color): this;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  set(property: "backgroundImage", value: Image): this;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  set(property: "baseline", value: this): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  set(property: "bottom", value: margin): this;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  set(property: "bounds", value: Bounds): this;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  set(property: "centerX", value: offset): this;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  set(property: "centerY", value: offset): this;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  set(property: "class", value: string): this;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  set(property: "cornerRadius", value: number): this;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  set(property: "elevation", value: number): this;

  /**
   * Whether the widget can be operated.
   */
  set(property: "enabled", value: boolean): this;

  /**
   * The font used for the widget.
   */
  set(property: "font", value: Font): this;

  /**
   * The height of the widget.
   */
  set(property: "height", value: dimension): this;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  set(property: "highlightOnTouch", value: boolean): this;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  set(property: "id", value: string): this;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  set(property: "layoutData", value: LayoutData): this;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  set(property: "left", value: margin): this;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  set(property: "opacity", value: number): this;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  set(property: "right", value: margin): this;

  /**
   * Text color of the widget.
   */
  set(property: "textColor", value: Color): this;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  set(property: "top", value: margin): this;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  set(property: "transform", value: Transformation): this;

  /**
   * Whether the widget is visible.
   */
  set(property: "visible", value: boolean): this;

  /**
   * The width of the widget.
   */
  set(property: "width", value: dimension): this;
}

interface WidgetProperties extends EventsProperties, PropertiesProperties {

  /**
   * Background color of the widget.
   */
  background?: Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  backgroundImage?: Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  baseline?: this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  bottom?: margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  bounds?: Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  centerX?: offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  centerY?: offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  class?: string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  cornerRadius?: number;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  elevation?: number;

  /**
   * Whether the widget can be operated.
   */
  enabled?: boolean;

  /**
   * The font used for the widget.
   */
  font?: Font;

  /**
   * The height of the widget.
   */
  height?: dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  highlightOnTouch?: boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  id?: string;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  layoutData?: LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  left?: margin;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  opacity?: number;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  right?: margin;

  /**
   * Text color of the widget.
   */
  textColor?: Color;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  top?: margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  transform?: Transformation;

  /**
   * Whether the widget is visible.
   */
  visible?: boolean;

  /**
   * The width of the widget.
   */
  width?: dimension;
}

// Events

/**
 * Event handling API supported by widgets and various other objects.
 */
export class Events {

  constructor(properties?: EventsProperties);

  /**
   * Removes all listeners for all events from this widget. Supports chaining.
   */
  off(): this;

  /**
   * Removes all listeners for *event* from this widget. Supports chaining.
   * @param event 
   */
  off(event: string): this;

  /**
   * Removes all occurrences of *listener* that are bound to *event* from this widget, regardless of their
   * *context* parameter. Supports chaining.
   * @param event 
   * @param listener 
   */
  off(event: string, listener: Function): this;

  /**
   * Removes all occurrences of *listener* that are bound to *event* and *context* from this widget.
   * Supports chaining.
   * @param event 
   * @param listener 
   * @param context 
   */
  off(event: string, listener: Function, context: this): this;

  /**
   * Adds a *listener* to the list of functions to be notified when *event* is fired. If the context
   * parameter is not present, the listener will be called in the context of this object. Supports
   * chaining.
   * @param event 
   * @param listener 
   * @param context? In the listener function, `this` will point to this object.
   */
  on(event: string, listener: Function, context?: this): this;

  /**
   * Same as `on`, but removes the listener after it has been invoked by an event. Supports chaining.
   * @param event 
   * @param listener 
   */
  once(event: string, listener: Function): this;

  /**
   * Same as `on`, but removes the listener after it has been invoked by an event. Supports chaining.
   * @param event 
   * @param listener 
   * @param context In the listener function, `this` will point to this object.
   */
  once(event: string, listener: Function, context: this): this;

  /**
   * Triggers an event of the given type. All registered listeners will be notified. Additional parameters
   * will be passed to the listeners.
   * @param event 
   * @param ...params 
   */
  trigger(event: string, ...params: any[]): this;
}

interface EventsProperties {
}

// Properties

/**
 * Properties API supported by all widgets and various other objects.
 */
export class Properties {

  constructor(properties?: PropertiesProperties);

  /**
   * Gets the current value of the given *property*.
   * @param property 
   */
  get(property: string): any;

  /**
   * Sets the given property. Supports chaining.
   * @param property 
   * @param value 
   */
  set(property: string, value: any): this;

  /**
   * Sets the given property. Supports chaining.
   * @param property 
   * @param value 
   * @param options This object is given in the change event resulting from this method call.
   */
  set(property: string, value: any, options: Object): this;

  /**
   * Sets all key-value pairs in the properties object as widget properties. Supports chaining.
   * @param properties 
   */
  set(properties: Object): this;

  /**
   * Sets all key-value pairs in the properties object as widget properties. Supports chaining.
   * @param properties 
   * @param options This object is given in the change event(s) resulting from this method call.
   */
  set(properties: Object, options: Object): this;

  /**
   * Removes all occurrences of *listener* that are bound to *event* and *context* from this widget.
   * If the context parameter is not present, all matching listeners will be removed.
   * If the listener parameter is not present, all listeners that are bound to *event* will be removed.
   * If the event parameter is not present, all listeners for all events will be removed from this widget.
   * Supports chaining.
   * @param event
   * @param listener
   * @param context
   */
  off(event?: string, listener?: Function, context?: this): this;
  off(event: "change:{property}", listener?: Function, context?: this): this;

  /**
   * Adds a *listener* to the list of functions to be notified when *event* is fired. If the context
   * parameter is not present, the listener will be called in the context of this object. Supports
   * chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  on(event: string, listener: Function, context?: this): this;
  on(event: "change:{property}", listener: (target: this, value: any, options: Object) => any): this;

  /**
   * Same as `on`, but removes the listener after it has been invoked by an event. Supports chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  once(event: string, listener: Function, context?: this): this;
  once(event: "change:{property}", listener: (target: this, value: any, options: Object, context?: this) => any): this;

  /**
   * Triggers an event of the given type. All registered listeners will be notified. Additional parameters
   * will be passed to the listeners.
   * @param event
   * @param ...params
   */
  trigger(event: string, ...params: any[]): this;
}

interface PropertiesProperties {
}

// WidgetCollection

/**
 * A `WidgetCollection` is an array-like object representing a set of widgets, as returned by the widget
 * methods `children` and `find`.
 */
export class WidgetCollection {

  constructor(properties?: WidgetCollectionProperties);

  /**
   * A read-only field containing the number of widgets in the collection.
   */
  length: number;

  /**
   * Animates all widgets in this collection.
   * @param properties The properties and target values to animate.
   * @param options Configures the animation itself.
   */
  animate(properties: Object, options: Object): void;

  /**
   * Append all widgets in this collection to the given widget.
   * @param parent 
   */
  appendTo(parent: Composite): WidgetCollection;

  /**
   * Returns a collection containing all children of all widgets in this collection.
   */
  children(): WidgetCollection;

  /**
   * Same as `collection.children().filter(selector)`.
   * @param selector 
   */
  children(selector: Selector): WidgetCollection;

  /**
   * Disposes all widgets in this collection.
   */
  dispose(): void;

  /**
   * Returns a new *WidgetCollection* containing all widgets in this collection that match the given
   * selector.
   * @param selector 
   */
  filter(selector: Selector): WidgetCollection;

  /**
   * Returns a collection containing all descendants of all widgets in this collection.
   */
  find(): WidgetCollection;

  /**
   * Returns a collection containing all descendants of all widgets in this collection that match the
   * given selector.
   * @param selector 
   */
  find(selector: Selector): WidgetCollection;

  /**
   * Returns the first widget in the collection. Same as `collection[0]`.
   */
  first(): Widget;

  /**
   * Calls the given callback for each widget in the collection.
   * @param callback The function to call. The arguments are: *widget*, *index*, *WidgetCollection*
   */
  forEach(callback: Function): void;

  /**
   * Returns the index of the given widget within the collection. If there is no match, the return value
   * is `-1`.
   * @param widget 
   */
  indexOf(widget: Widget): number;

  /**
   * Returns the last widget in the collection. Same as `collection[collection.length - 1]`.
   */
  last(): Widget;

  /**
   * Returns a collection containing all direct parents of all widgets in this collection.
   */
  parent(): WidgetCollection;

  /**
   * Return an Array containing all widgets in the collection.
   */
  toArray(): Widget[];

  /**
   * Removes all occurrences of *listener* that are bound to *event* and *context* from this widget.
   * If the context parameter is not present, all matching listeners will be removed.
   * If the listener parameter is not present, all listeners that are bound to *event* will be removed.
   * If the event parameter is not present, all listeners for all events will be removed from this widget.
   * Supports chaining.
   * @param event
   * @param listener
   * @param context
   */
  off(event?: string, listener?: Function, context?: this): this;
  off(event: "change:{property}", listener?: Function, context?: this): this;

  /**
   * Adds a *listener* to the list of functions to be notified when *event* is fired. If the context
   * parameter is not present, the listener will be called in the context of this object. Supports
   * chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  on(event: string, listener: Function, context?: this): this;
  on(event: "change:{property}", listener: (target: this, value: any, options: Object) => any): this;

  /**
   * Same as `on`, but removes the listener after it has been invoked by an event. Supports chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  once(event: string, listener: Function, context?: this): this;
  once(event: "change:{property}", listener: (target: this, value: any, options: Object, context?: this) => any): this;

  /**
   * Triggers an event of the given type. All registered listeners will be notified. Additional parameters
   * will be passed to the listeners.
   * @param event
   * @param ...params
   */
  trigger(event: string, ...params: any[]): this;

  /**
   * Gets the current value of the given *property*.
   * @param property
   */
  get(property: string): any;

  /**
   * Sets the given property. Supports chaining.
   * @param property
   * @param value
   */
  set(property: string, value: any): this;

  /**
   * Sets all key-value pairs in the properties object as widget properties. Supports chaining.
   * @param properties
   */
  set(properties: WidgetCollectionProperties): this;
}

interface WidgetCollectionProperties extends EventsProperties, PropertiesProperties {
}

// App

/**
 * The object `tabris.app` provides information about the application.
 */
export class App {

  constructor(properties?: AppProperties);

  /**
   * Returns the URL for a given resource that is bundled with the app. Can be used to access app
   * resources like images, videos, etc. Note that these resources can only be accessed in read-only mode.
   * @param path The path of a resource relative to the application root.
   */
  getResourceLocation(path: string): string;

  /**
   * Installs a patch from the given URL. When the patch is successfully installed, it will remain
   * inactive until the application is reloaded.
   * @param url The URL to fetch a patch from.
   * @param callback A callback function to be called when the installation has finished or failed. In case of a failure, the callback will receive a parameter `error` that contains an Error object. If the installation succeeds, this parameter will be `undefined` and a second parameter will contain the parsed content of the file `patch.json` from the installed patch.
   * @provisional
   */
  installPatch(url: string, callback: Function): void;

  /**
   * Forces the running application to reload the main module and start over.
   */
  reload(): void;

  /**
   * Removes all occurrences of *listener* that are bound to *event* and *context* from this widget.
   * If the context parameter is not present, all matching listeners will be removed.
   * If the listener parameter is not present, all listeners that are bound to *event* will be removed.
   * If the event parameter is not present, all listeners for all events will be removed from this widget.
   * Supports chaining.
   * @param event
   * @param listener
   * @param context
   */
  off(event?: string, listener?: Function, context?: this): this;
  off(event: "backnavigation", listener?: Function, context?: this): this;
  off(event: "pause", listener?: Function, context?: this): this;
  off(event: "resume", listener?: Function, context?: this): this;

  /**
   * Adds a *listener* to the list of functions to be notified when *event* is fired. If the context
   * parameter is not present, the listener will be called in the context of this object. Supports
   * chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  on(event: string, listener: Function, context?: this): this;
  on(event: "backnavigation", listener: (app: App, event: Object) => any): this;
  on(event: "pause", listener: (app: App) => any): this;
  on(event: "resume", listener: (app: App) => any): this;

  /**
   * Same as `on`, but removes the listener after it has been invoked by an event. Supports chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  once(event: string, listener: Function, context?: this): this;
  once(event: "backnavigation", listener: (app: App, event: Object, context?: this) => any): this;
  once(event: "pause", listener: (app: App, context?: this) => any): this;
  once(event: "resume", listener: (app: App, context?: this) => any): this;

  /**
   * Triggers an event of the given type. All registered listeners will be notified. Additional parameters
   * will be passed to the listeners.
   * @param event
   * @param ...params
   */
  trigger(event: string, ...params: any[]): this;

  /**
   * Gets the current value of the given *property*.
   * @param property
   */
  get(property: string): any;

  /**
   * Sets the given property. Supports chaining.
   * @param property
   * @param value
   */
  set(property: string, value: any): this;

  /**
   * Sets all key-value pairs in the properties object as widget properties. Supports chaining.
   * @param properties
   */
  set(properties: AppProperties): this;
}

interface AppProperties extends EventsProperties {
}

declare let app: App;

// Device

/**
 * The object `tabris.device` provides information about the device that executes the application. All
 * properties are read-only.
 */
export class Device {

  constructor(properties?: DeviceProperties);

  /**
   * Removes all occurrences of *listener* that are bound to *event* and *context* from this widget.
   * If the context parameter is not present, all matching listeners will be removed.
   * If the listener parameter is not present, all listeners that are bound to *event* will be removed.
   * If the event parameter is not present, all listeners for all events will be removed from this widget.
   * Supports chaining.
   * @param event
   * @param listener
   * @param context
   */
  off(event?: string, listener?: Function, context?: this): this;
  off(event: "change:orientation", listener?: Function, context?: this): this;
  off(event: "change:{property}", listener?: Function, context?: this): this;

  /**
   * Adds a *listener* to the list of functions to be notified when *event* is fired. If the context
   * parameter is not present, the listener will be called in the context of this object. Supports
   * chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  on(event: string, listener: Function, context?: this): this;
  on(event: "change:orientation", listener: (device: Device, orientation: string, options: Object) => any): this;
  on(event: "change:{property}", listener: (target: this, value: any, options: Object) => any): this;

  /**
   * Same as `on`, but removes the listener after it has been invoked by an event. Supports chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  once(event: string, listener: Function, context?: this): this;
  once(event: "change:orientation", listener: (device: Device, orientation: string, options: Object, context?: this) => any): this;
  once(event: "change:{property}", listener: (target: this, value: any, options: Object, context?: this) => any): this;

  /**
   * Triggers an event of the given type. All registered listeners will be notified. Additional parameters
   * will be passed to the listeners.
   * @param event
   * @param ...params
   */
  trigger(event: string, ...params: any[]): this;

  /**
   * Gets the current value of the given *property*.
   * @param property
   */
  get(property: string): any;

  /**
   * The user language configured on the device as an [RFC 4646](http://tools.ietf.org/html/rfc4646)
   * compliant string. For example `"de"`, `"es-ES"`, etc. This property is also available globally as
   * `navigator.language`.
   */
  get(property: "language"): string;

  /**
   * The name of the device model. For example `"iPad4,1"` or `"Nexus 7"`. This property is also available
   * globally as `device.model`.
   */
  get(property: "model"): string;

  /**
   * The device orientation. One of `portrait-primary`, `portrait-secondary`, `landscape-primary`, and
   * `landscape-secondary`.
   */
  get(property: "orientation"): string;

  /**
   * The name of the platform. Currently either `"Android"` or `"iOS"`. This property is also available
   * globally as `device.platform`.
   */
  get(property: "platform"): string;

  /**
   * The ratio between physical pixels and device independent pixels. This property is also available
   * globally as
   * [`window.devicePixelRatio`](https://developer.mozilla.org/en-US/docs/Web/API/Window.devicePixelRatio).
   */
  get(property: "scaleFactor"): number;

  /**
   * The entire height of the device's screen in device independent pixel. Depends on the current device
   * orientation. This property is also available globally as
   * [screen.height](https://developer.mozilla.org/en-US/docs/Web/API/Screen.height).
   */
  get(property: "screenHeight"): number;

  /**
   * The entire width of the device's screen in device independent pixel. Depends on the current device
   * orientation. This property is also available as globally as
   * [screen.width](https://developer.mozilla.org/en-US/docs/Web/API/Screen.width).
   */
  get(property: "screenWidth"): number;

  /**
   * The platform version. On iOS it lools like this: `"8.1.1"`. On Android, the [version
   * code](https://developer.android.com/reference/android/os/Build.VERSION_CODES.html) is returned. This
   * property is also available globally as `device.version`.
   */
  get(property: "version"): string;

  /**
   * Sets the given property. Supports chaining.
   * @param property
   * @param value
   */
  set(property: string, value: any): this;

  /**
   * Sets all key-value pairs in the properties object as widget properties. Supports chaining.
   * @param properties
   */
  set(properties: DeviceProperties): this;

  /**
   * The user language configured on the device as an [RFC 4646](http://tools.ietf.org/html/rfc4646)
   * compliant string. For example `"de"`, `"es-ES"`, etc. This property is also available globally as
   * `navigator.language`.
   */
  set(property: "language", value: string): this;

  /**
   * The name of the device model. For example `"iPad4,1"` or `"Nexus 7"`. This property is also available
   * globally as `device.model`.
   */
  set(property: "model", value: string): this;

  /**
   * The device orientation. One of `portrait-primary`, `portrait-secondary`, `landscape-primary`, and
   * `landscape-secondary`.
   */
  set(property: "orientation", value: string): this;

  /**
   * The name of the platform. Currently either `"Android"` or `"iOS"`. This property is also available
   * globally as `device.platform`.
   */
  set(property: "platform", value: string): this;

  /**
   * The ratio between physical pixels and device independent pixels. This property is also available
   * globally as
   * [`window.devicePixelRatio`](https://developer.mozilla.org/en-US/docs/Web/API/Window.devicePixelRatio).
   */
  set(property: "scaleFactor", value: number): this;

  /**
   * The entire height of the device's screen in device independent pixel. Depends on the current device
   * orientation. This property is also available globally as
   * [screen.height](https://developer.mozilla.org/en-US/docs/Web/API/Screen.height).
   */
  set(property: "screenHeight", value: number): this;

  /**
   * The entire width of the device's screen in device independent pixel. Depends on the current device
   * orientation. This property is also available as globally as
   * [screen.width](https://developer.mozilla.org/en-US/docs/Web/API/Screen.width).
   */
  set(property: "screenWidth", value: number): this;

  /**
   * The platform version. On iOS it lools like this: `"8.1.1"`. On Android, the [version
   * code](https://developer.android.com/reference/android/os/Build.VERSION_CODES.html) is returned. This
   * property is also available globally as `device.version`.
   */
  set(property: "version", value: string): this;
}

interface DeviceProperties extends EventsProperties, PropertiesProperties {

  /**
   * The user language configured on the device as an [RFC 4646](http://tools.ietf.org/html/rfc4646)
   * compliant string. For example `"de"`, `"es-ES"`, etc. This property is also available globally as
   * `navigator.language`.
   */
  language?: string;

  /**
   * The name of the device model. For example `"iPad4,1"` or `"Nexus 7"`. This property is also available
   * globally as `device.model`.
   */
  model?: string;

  /**
   * The device orientation. One of `portrait-primary`, `portrait-secondary`, `landscape-primary`, and
   * `landscape-secondary`.
   */
  orientation?: string;

  /**
   * The name of the platform. Currently either `"Android"` or `"iOS"`. This property is also available
   * globally as `device.platform`.
   */
  platform?: string;

  /**
   * The ratio between physical pixels and device independent pixels. This property is also available
   * globally as
   * [`window.devicePixelRatio`](https://developer.mozilla.org/en-US/docs/Web/API/Window.devicePixelRatio).
   */
  scaleFactor?: number;

  /**
   * The entire height of the device's screen in device independent pixel. Depends on the current device
   * orientation. This property is also available globally as
   * [screen.height](https://developer.mozilla.org/en-US/docs/Web/API/Screen.height).
   */
  screenHeight?: number;

  /**
   * The entire width of the device's screen in device independent pixel. Depends on the current device
   * orientation. This property is also available as globally as
   * [screen.width](https://developer.mozilla.org/en-US/docs/Web/API/Screen.width).
   */
  screenWidth?: number;

  /**
   * The platform version. On iOS it lools like this: `"8.1.1"`. On Android, the [version
   * code](https://developer.android.com/reference/android/os/Build.VERSION_CODES.html) is returned. This
   * property is also available globally as `device.version`.
   */
  version?: string;
}

declare let device: Device;

// UI

/**
 * The object `tabris.ui` is the root element for all widgets. This is the parent for all top-level
 * pages, *actions* and the *drawer*.
 */
export class UI extends Widget {

  constructor(properties?: UIProperties);

  /**
   * Removes all occurrences of *listener* that are bound to *event* and *context* from this widget.
   * If the context parameter is not present, all matching listeners will be removed.
   * If the listener parameter is not present, all listeners that are bound to *event* will be removed.
   * If the event parameter is not present, all listeners for all events will be removed from this widget.
   * Supports chaining.
   * @param event
   * @param listener
   * @param context
   */
  off(event?: string, listener?: Function, context?: this): this;
  off(event: "animationend", listener?: Function, context?: this): this;
  off(event: "animationstart", listener?: Function, context?: this): this;
  off(event: "change:activePage", listener?: Function, context?: this): this;
  off(event: "change:{property}", listener?: Function, context?: this): this;
  off(event: "dispose", listener?: Function, context?: this): this;
  off(event: "longpress", listener?: Function, context?: this): this;
  off(event: "pan", listener?: Function, context?: this): this;
  off(event: "pan:down", listener?: Function, context?: this): this;
  off(event: "pan:left", listener?: Function, context?: this): this;
  off(event: "pan:right", listener?: Function, context?: this): this;
  off(event: "pan:up", listener?: Function, context?: this): this;
  off(event: "resize", listener?: Function, context?: this): this;
  off(event: "swipe:down", listener?: Function, context?: this): this;
  off(event: "swipe:left", listener?: Function, context?: this): this;
  off(event: "swipe:right", listener?: Function, context?: this): this;
  off(event: "swipe:up", listener?: Function, context?: this): this;
  off(event: "tap", listener?: Function, context?: this): this;
  off(event: "touchcancel", listener?: Function, context?: this): this;
  off(event: "touchend", listener?: Function, context?: this): this;
  off(event: "touchmove", listener?: Function, context?: this): this;
  off(event: "touchstart", listener?: Function, context?: this): this;

  /**
   * Adds a *listener* to the list of functions to be notified when *event* is fired. If the context
   * parameter is not present, the listener will be called in the context of this object. Supports
   * chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  on(event: string, listener: Function, context?: this): this;
  on(event: "animationend", listener: (widget: this, options: Object) => any): this;
  on(event: "animationstart", listener: (widget: this, options: Object) => any): this;
  on(event: "change:activePage", listener: (ui: UI, page: Page, options: Object) => any): this;
  on(event: "change:{property}", listener: (widget: this, value: any, options: Object) => any): this;
  on(event: "dispose", listener: (widget: this) => any): this;
  on(event: "longpress", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "pan:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "resize", listener: (widget: this, bounds: Bounds, options: Object) => any): this;
  on(event: "swipe:down", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:left", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:right", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "swipe:up", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "tap", listener: (widget: this, gesture: GestureObject) => any): this;
  on(event: "touchcancel", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchend", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchmove", listener: (widget: this, gesture: TouchEvent) => any): this;
  on(event: "touchstart", listener: (widget: this, gesture: TouchEvent) => any): this;

  /**
   * Same as `on`, but removes the listener after it has been invoked by an event. Supports chaining.
   * @param event
   * @param listener
   * @param context? In the listener function, `this` will point to this object.
   */
  once(event: string, listener: Function, context?: this): this;
  once(event: "animationend", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "animationstart", listener: (widget: this, options: Object, context?: this) => any): this;
  once(event: "change:activePage", listener: (ui: UI, page: Page, options: Object, context?: this) => any): this;
  once(event: "change:{property}", listener: (widget: this, value: any, options: Object, context?: this) => any): this;
  once(event: "dispose", listener: (widget: this, context?: this) => any): this;
  once(event: "longpress", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "pan:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "resize", listener: (widget: this, bounds: Bounds, options: Object, context?: this) => any): this;
  once(event: "swipe:down", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:left", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:right", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "swipe:up", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "tap", listener: (widget: this, gesture: GestureObject, context?: this) => any): this;
  once(event: "touchcancel", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchend", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchmove", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;
  once(event: "touchstart", listener: (widget: this, gesture: TouchEvent, context?: this) => any): this;

  /**
   * Triggers an event of the given type. All registered listeners will be notified. Additional parameters
   * will be passed to the listeners.
   * @param event
   * @param ...params
   */
  trigger(event: string, ...params: any[]): this;

  /**
   * Gets the current value of the given *property*.
   * @param property
   */
  get(property: string): any;

  /**
   * The currently visible page.
   */
  get(property: "activePage"): Page;

  /**
   * Background color for the navigation elements
   */
  get(property: "background"): Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  get(property: "backgroundImage"): Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  get(property: "baseline"): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  get(property: "bottom"): margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  get(property: "bounds"): Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  get(property: "centerX"): offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  get(property: "centerY"): offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  get(property: "class"): string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  get(property: "cornerRadius"): number;

  /**
   * Allows to switch the UI to full screen.
   */
  get(property: "displayMode"): string;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  get(property: "elevation"): number;

  /**
   * Whether the widget can be operated.
   */
  get(property: "enabled"): boolean;

  /**
   * The font used for the widget.
   */
  get(property: "font"): Font;

  /**
   * The height of the widget.
   */
  get(property: "height"): dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  get(property: "highlightOnTouch"): boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  get(property: "id"): string;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  get(property: "layoutData"): LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  get(property: "left"): margin;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  get(property: "opacity"): number;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  get(property: "right"): margin;

  /**
   * The theme to use for the system status bar. The value "default" selects the platform default. This
   * property will only control the foreground text and icons. The 'light' theme will result in *dark*
   * foreground. Only supported on iOS and Android 6+.
   */
  get(property: "statusBarTheme"): string;

  /**
   * Text color for the navigation elements
   */
  get(property: "textColor"): Color;

  /**
   * Whether the toolbars above and below pages are visible.
   */
  get(property: "toolbarVisible"): boolean;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  get(property: "top"): margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  get(property: "transform"): Transformation;

  /**
   * Whether the widget is visible.
   */
  get(property: "visible"): boolean;

  /**
   * The width of the widget.
   */
  get(property: "width"): dimension;

  /**
   * Sets the given property. Supports chaining.
   * @param property
   * @param value
   */
  set(property: string, value: any): this;

  /**
   * Sets all key-value pairs in the properties object as widget properties. Supports chaining.
   * @param properties
   */
  set(properties: UIProperties): this;

  /**
   * The currently visible page.
   */
  set(property: "activePage", value: Page): this;

  /**
   * Background color for the navigation elements
   */
  set(property: "background", value: Color): this;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  set(property: "backgroundImage", value: Image): this;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  set(property: "baseline", value: this): this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  set(property: "bottom", value: margin): this;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  set(property: "bounds", value: Bounds): this;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  set(property: "centerX", value: offset): this;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  set(property: "centerY", value: offset): this;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  set(property: "class", value: string): this;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  set(property: "cornerRadius", value: number): this;

  /**
   * Allows to switch the UI to full screen.
   */
  set(property: "displayMode", value: string): this;
  set(property: "displayMode", value: "fullscreen"): this;
  set(property: "displayMode", value: "normal"): this;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  set(property: "elevation", value: number): this;

  /**
   * Whether the widget can be operated.
   */
  set(property: "enabled", value: boolean): this;

  /**
   * The font used for the widget.
   */
  set(property: "font", value: Font): this;

  /**
   * The height of the widget.
   */
  set(property: "height", value: dimension): this;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  set(property: "highlightOnTouch", value: boolean): this;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  set(property: "id", value: string): this;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  set(property: "layoutData", value: LayoutData): this;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  set(property: "left", value: margin): this;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  set(property: "opacity", value: number): this;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  set(property: "right", value: margin): this;

  /**
   * The theme to use for the system status bar. The value "default" selects the platform default. This
   * property will only control the foreground text and icons. The 'light' theme will result in *dark*
   * foreground. Only supported on iOS and Android 6+.
   */
  set(property: "statusBarTheme", value: string): this;
  set(property: "statusBarTheme", value: "dark"): this;
  set(property: "statusBarTheme", value: "default"): this;
  set(property: "statusBarTheme", value: "light"): this;

  /**
   * Text color for the navigation elements
   */
  set(property: "textColor", value: Color): this;

  /**
   * Whether the toolbars above and below pages are visible.
   */
  set(property: "toolbarVisible", value: boolean): this;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  set(property: "top", value: margin): this;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  set(property: "transform", value: Transformation): this;

  /**
   * Whether the widget is visible.
   */
  set(property: "visible", value: boolean): this;

  /**
   * The width of the widget.
   */
  set(property: "width", value: dimension): this;
}

interface UIProperties extends WidgetProperties {

  /**
   * The currently visible page.
   */
  activePage?: Page;

  /**
   * Background color for the navigation elements
   */
  background?: Color;

  /**
   * An image to be displayed on the widget's background. If the image is smaller than the widget, it will
   * be tiled.
   */
  backgroundImage?: Image;

  /**
   * The vertical position of the widget's baseline relative to a sibling widget.
   */
  baseline?: this;

  /**
   * The position of the widget's bottom edge relative to the parent or a sibling widget.
   */
  bottom?: margin;

  /**
   * The actual location and size of the widget, relative to its parent. This property is read-only.
   */
  bounds?: Bounds;

  /**
   * The horizontal position of the widget's center relative to the parent's center.
   */
  centerX?: offset;

  /**
   * The vertical position of the widget's center relative to the parent's center.
   */
  centerY?: offset;

  /**
   * A class name or a whitespace separated list of class names to identify the widget. Class names are
   * arbitrary strings that describe a state or a category and help to select widgets using a selector
   * expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also
   * be added or removed using the field `classList`.
   */
  class?: string;

  /**
   * Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and
   * Android 5.0+.
   */
  cornerRadius?: number;

  /**
   * Allows to switch the UI to full screen.
   */
  displayMode?: string;

  /**
   * The position of the widget on the z-axis. Currently only supported on Android 5.0+.
   */
  elevation?: number;

  /**
   * Whether the widget can be operated.
   */
  enabled?: boolean;

  /**
   * The font used for the widget.
   */
  font?: Font;

  /**
   * The height of the widget.
   */
  height?: dimension;

  /**
   * Whether the entire widget should be highlighted while touched.
   */
  highlightOnTouch?: boolean;

  /**
   * A string to identify the widget by using selectors. Id's are optional. It is strongly recommended
   * that they are unique within a page.
   */
  id?: string;

  /**
   * Shorthand for all layout properties. See [Layout](../layout.md).
   */
  layoutData?: LayoutData;

  /**
   * The position of the widget's left edge relative to the parent or a sibling widget.
   */
  left?: margin;

  /**
   * Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.
   */
  opacity?: number;

  /**
   * The position of the widget's right edge relative to the parent or a sibling widget.
   */
  right?: margin;

  /**
   * The theme to use for the system status bar. The value "default" selects the platform default. This
   * property will only control the foreground text and icons. The 'light' theme will result in *dark*
   * foreground. Only supported on iOS and Android 6+.
   */
  statusBarTheme?: string;

  /**
   * Text color for the navigation elements
   */
  textColor?: Color;

  /**
   * Whether the toolbars above and below pages are visible.
   */
  toolbarVisible?: boolean;

  /**
   * The position of the widget's top edge relative to the parent or a sibling widget.
   */
  top?: margin;

  /**
   * Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In
   * Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
   */
  transform?: Transformation;

  /**
   * Whether the widget is visible.
   */
  visible?: boolean;

  /**
   * The width of the widget.
   */
  width?: dimension;
}

declare let ui: UI;

// Timer

/**
 * The object `window` is the global object. All fields of windows are also global variables and vice
 * versa. For compatibility it is also known as `global` and `self`.
 */
export class Timer {

  constructor(properties?: TimerProperties);

  /**
   * Cancels the running interval associated with the given id. When given an invalid ID, nothing happens.
   * @param id The ID that was returned by `setInterval`.
   */
  clearInterval(id: any): void;

  /**
   * Cancels the running timeout associated with the given id. When given an invalid ID, nothing happens.
   * @param id The ID that was returned by `setTimeout`.
   */
  clearTimeout(id: any): void;

  /**
   * Calls the given function repeatedly, each times waiting the given delay. The actual delay may be
   * slightly longer than the given one.
   * @param callback The function to call.
   * @param delay The delay in milliseconds.
   */
  setInterval(callback: Function, delay: number): any;

  /**
   * Calls the given function repeatedly, each times waiting the given delay. The actual delay may be
   * slightly longer than the given one.
   * @param callback The function to call.
   * @param delay The delay in milliseconds.
   * @param ...params One ore more values passed on to the callback.
   */
  setInterval(callback: Function, delay: number, ...params: any[]): any;

  /**
   * Calls the given function as soon as the current javascript thread is no longer busy. Same as
   * `setTimeout(callback, 0)`.
   * @param callback The function to call.
   */
  setTimeout(callback: Function): any;

  /**
   * Calls the given function after the specified delay. The actual delay may be slightly longer than the
   * given one.
   * @param callback The function to call.
   * @param delay The delay in milliseconds.
   */
  setTimeout(callback: Function, delay: number): any;

  /**
   * Calls the given function with `param` (and all following parameters) after the specified delay. The
   * actual delay may be slightly longer than the given one.
   * @param callback The function to call.
   * @param delay The delay in milliseconds.
   * @param ...params One ore more values passed on to the callback.
   */
  setTimeout(callback: Function, delay: number, ...params: any[]): any;
}

interface TimerProperties {
}

declare let window: Timer;

