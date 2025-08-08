# How to Add Your Profile Picture

## Quick Steps:

1. **Save your profile picture** with one of these names:
   - `profile-image.jpg`
   - `profile-image.png` 
   - `muskan-profile.jpg`
   - `profile.jpg`

2. **Place the image** in the `portfolio/public/` folder

3. **Update the image source** in `src/components/Hero.js`:
   ```javascript
   src="/your-image-name.jpg"
   ```

## Current Status:
- The profile circle is currently showing a placeholder image
- Once you add your image, it will display properly in the circular container

## Image Requirements:
- **Format**: JPG, PNG, or WebP
- **Size**: At least 300×300 pixels (will be scaled down)
- **Aspect Ratio**: Square works best
- **Quality**: High quality for crisp display

## Example:
If you save your image as `profile-image.jpg` in the public folder, update line 108 in Hero.js:
```javascript
src="/profile-image.jpg"
``` 