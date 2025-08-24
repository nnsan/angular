# 🎯 View Encapsulation in Angular

Angular components have view encapsulation strategies that define how styles are applied.  
It controls whether the CSS defined in a component affects only that component or can “leak” out to others.

There are three main modes:

---

## **1. Emulated (default)**

Angular emulates Shadow DOM behavior using attribute selectors.  

- Styles are scoped only to that component’s template.  
- With `ViewEncapsulation.Emulated`, Angular pre-processes all the component's styles so that they are only applied to the component's view. This is the most commonly used option in Angular apps.

```ts
@Component({
  selector: 'app-hello',
  template: `<h1>Hello</h1>`,
  styles: [`h1 { color: red; }`],
  encapsulation: ViewEncapsulation.Emulated
})
```

## **2. ShadowDom**

Angular actually uses the browser’s real Shadow DOM.  

- Styles are truly isolated, cannot leak outside.  
- Supported only in modern browsers.  

```ts
encapsulation: ViewEncapsulation.ShadowDom
```

## **3. None**

No encapsulation. Styles are global and will affect the entire app.  

- Useful when you want global theming.  

```ts
encapsulation: ViewEncapsulation.None
```