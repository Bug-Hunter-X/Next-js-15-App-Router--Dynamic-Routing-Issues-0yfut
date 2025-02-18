# Next.js 15 App Router Dynamic Routing Bug

This repository demonstrates a bug encountered in Next.js 15's App Router when using dynamic routing with a file-based routing system.  The issue causes unexpected behavior, such as incorrect rendering or runtime errors.

## Bug Description

When using dynamic segments in routes defined using file paths, the App Router may fail to correctly resolve or render the pages.  This can manifest in several ways, including:

* Incorrect page rendering.
* Runtime errors.
* Missing data.

## Reproduction Steps

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
4. Navigate to the problematic route.

## Expected Behavior

The application should correctly render the page with the appropriate data, based on the dynamic route parameter.

## Actual Behavior

The application either fails to render the page correctly, or throws a runtime error.

## Solution

The solution involves carefully reviewing the structure of your routing system and ensuring that the dynamic segments are correctly defined in your file paths and associated components.

See the `bugSolution.js` file for a possible resolution.