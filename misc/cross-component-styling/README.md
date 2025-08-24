# Cross-Component Styling in Angular

## 1. Introduction

* Start with the problem: Angular’s encapsulation is great for isolation, but sometimes you need styles to cross component boundaries.
* Mention common scenarios: theming, overriding library styles, customizing child components.
* Hook: “So how can we safely apply cross-component styling in Angular?”

## 2. Why Cross-Component Styling is Tricky

* Quick recap: Each component by default isolates styles (via ViewEncapsulation.Emulated).
* This prevents style leaks but makes parent → child styling harder.
* Example: Parent wants to style <button> inside a child component.

## 3. Techniques for Cross-Component Styling
1. Use Global Styles (ViewEncapsulation.None)

* Put styles in styles.css or set a component’s encapsulation to None.
* ✅ Works for themes, utility classes.
* ⚠️ Can lead to conflicts if overused.

1. Use ::ng-deep (Scoped Overrides)

* Special selector to pierce style boundaries.
* Example: customizing Angular Material’s button.
* ⚠️ Deprecated — recommend sparingly.

1. Use CSS Variables (Preferred Modern Way)

* Define CSS custom properties at the root level.
* Child components can consume these variables.
* ✅ Great for theming (dark mode, brand colors).

1. Use Shared SCSS/Theme Files

* Define mixins or variables in a global SCSS file.
* Import them into multiple components for consistency.

1. Use Component Inputs for Styling

* Pass class names or style tokens as @Input.
* ✅ Cleaner Angular way → avoids tight CSS coupling.

## 4. Best Practices

* Use CSS variables or inputs for theming instead of ::ng-deep.
* Keep global styles minimal — only for resets, utility classes, themes.
* Avoid overusing ViewEncapsulation.None → breaks modularity.
* Document and centralize theme definitions for maintainability.

## 5. Examples

Parent → Child styling with ::ng-deep

```css
::ng-deep app-child button {
  background-color: red;
}
```

Global theming with CSS variables

```css
:root {
  --primary-color: #1ea0fe;
}
.themed-button {
  background-color: var(--primary-color);
}
```

Overriding Angular Material styles

```css
::ng-deep .mat-raised-button {
  border-radius: 12px;
}
```

## 6. Conclusion

* Cross-component styling is sometimes necessary, but it should be done with care.
* Prefer inputs and CSS variables for clean, reusable designs.
* Use ::ng-deep or None only when unavoidable (e.g., overriding library styles).
* The key: find the right balance between encapsulation and flexibility.