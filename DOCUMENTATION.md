# Project Documentation

## Table of Contents

1. [Overview](#overview)
2. [Getting Started](#getting-started)
3. [Public Components](#public-components)
   - CreateLeadForm
   - ModernDashboard
   - Login
4. [Custom Hooks](#custom-hooks)
   - useToast
5. [Utility Functions](#utility-functions)
   - cn
6. [Usage Examples](#usage-examples)
7. [Contributing](#contributing)
8. [Deployment](#deployment)

---

## 1. Overview

This project is a modern CRM dashboard built with React, TypeScript, Vite, shadcn-ui, and Tailwind CSS. It features role-based dashboards, lead management, HR tools, and more.

---

## 2. Getting Started

Follow these steps to run the project locally:

```sh
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
npm install
npm run dev
```

---

## 3. Public Components

### CreateLeadForm

**File:** `src/components/CreateLeadForm.jsx`

A modal form for creating new leads, with fields for name, email, phone, location, budget, property type, status, and assignment.

**Props:**
- `isOpen` (boolean): Controls modal visibility.
- `onClose` (function): Callback to close the modal.
- `onSave` (function): Callback with the new lead data.

**Usage Example:**
```jsx
<CreateLeadForm
  isOpen={showForm}
  onClose={() => setShowForm(false)}
  onSave={handleSaveLead}
/>
```

---

### ModernDashboard

**File:** `src/components/ModernDashboard.jsx`

A dynamic dashboard that adapts to the user's role, displaying relevant analytics, cards, and navigation.

**Props:**
- `userRole` (string): The current user's role (e.g., 'super-admin', 'hr-manager').
- `userName` (string): The current user's name.

**Usage Example:**
```jsx
<ModernDashboard userRole="super-admin" userName="Alice" />
```

---

### Login

**File:** `src/pages/Login.jsx`

A login page with role selection, credential validation, and session management.

**Usage Example:**
```jsx
// In your router:
<Route path="/login" element={<Login />} />
```

---

## 4. Custom Hooks

### useToast

**File:** `src/hooks/use-toast.ts`

A custom hook for managing toast notifications.

**API:**
- `useToast()`: Returns `{ toasts, toast, dismiss }`
  - `toast({ title, description, ... })`: Show a new toast.
  - `dismiss(toastId)`: Dismiss a toast by ID.

**Usage Example:**
```js
import { useToast } from '@/hooks/use-toast';

const { toast } = useToast();

toast({ title: 'Success', description: 'Lead created!' });
```

---

## 5. Utility Functions

### cn

**File:** `src/lib/utils.ts`

A utility function for merging Tailwind CSS class names.

**Signature:**
```ts
function cn(...inputs: ClassValue[]): string
```

**Usage Example:**
```js
import { cn } from '@/lib/utils';

<div className={cn('p-4', isActive && 'bg-green-500')} />
```

---

## 6. Usage Examples

### Creating a Lead

```jsx
const handleSaveLead = (leadData) => {
  // Save lead logic
};

<CreateLeadForm
  isOpen={showForm}
  onClose={() => setShowForm(false)}
  onSave={handleSaveLead}
/>
```

### Showing a Toast

```js
import { useToast } from '@/hooks/use-toast';

const { toast } = useToast();

toast({ title: 'Success', description: 'Lead created!' });
```

---

## 7. Contributing

- Fork the repo and create a feature branch.
- Make your changes and add tests if applicable.
- Submit a pull request.

---

## 8. Deployment

See the [README.md](./README.md) for deployment instructions and custom domain setup.