# Angular 20 – Core Components & Features (Released May 28, 2025)

## 🚀 Major Highlights

### 1. Standalone Components (Default)
- No need for `NgModule` anymore.  
- Simplified project setup and structure.  
- CLI no longer generates suffixes like `.component.ts` or `.service.ts` by default.

---

### 2. Signal-Based Reactivity (Stable)
- New reactivity primitives are stable:  
  - `signal()`  
  - `effect()`  
  - `linkedSignal()`  
  - `toSignal()` / `toObservable()`  
- Enables concise and powerful state management.

---

### 3. Zoneless Change Detection
- Run Angular apps **without Zone.js**.  
- Benefits:
  - Smaller bundles  
  - Better performance  
  - Cleaner debugging  
  - Explicit control over change detection  

---

### 4. SSR + Incremental Hydration (Stable)
- Server-Side Rendering (SSR) now supports **incremental hydration**.  
- Partial hydration on interaction or visibility → faster load time.

---

### 5. Enhanced Template Syntax & Control Flow
- Template enhancements:  
  - Template literals  
  - Exponentiation (`**`)  
  - `in` operator  
  - `void` operator  
- New control flow syntax with better type safety:  
  - `@if`, `@for`, `@switch`

---

### 6. Improved Dynamic Component API
- `createComponent()` improvements:  
  - Input/Output bindings  
  - Two-way binding (`twoWayBinding()`)  
  - Apply directives to dynamic components  

---

### 7. Extended Diagnostics & Tooling
- Better template diagnostics (`track`, missing imports, invalid expressions).  
- Global error handling via `provideBrowserGlobalErrorListeners`.  
- Angular DevTools: new **Signals panel**.  
- Experimental **Vitest** support for testing.  

---

### 8. Other Additions
- **Signal-Based Forms (Preview):** APIs like `formSignal()`, `signalFormControl()`.  
- **Selectorless Components (Experimental):** Define components without selectors.

---

## 📊 Summary Table

| Core Feature                   | Description                                                                 |
|--------------------------------|-----------------------------------------------------------------------------|
| **Standalone Components**      | `NgModule` no longer required; simpler structure.                           |
| **Signal-Based Reactivity**    | Stable reactivity primitives (`signal`, `effect`, etc.).                    |
| **Zoneless Change Detection**  | Optional removal of Zone.js → faster apps.                                  |
| **SSR + Hydration**            | Stable incremental hydration for SSR.                                       |
| **Template Syntax**            | Template literals, `**`, `in`, `void`.                                      |
| **Modern Control Flow**        | `@if`, `@for`, `@switch` with strict typing.                                |
| **Dynamic Component API**      | `createComponent()` supports bindings & directives.                         |
| **Diagnostics & Tooling**      | Improved CLI checks, Signals DevTools, Vitest support.                      |
| **Signal-Based Forms (Preview)** | Reactive forms with signals.                                              |
| **Selectorless Components (Exp.)** | Components without selectors → less boilerplate.                        |
