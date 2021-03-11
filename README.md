# A and A Designs
This is a personal project geared as an ecommerce site.

# Features
Below are some of the features I chose to implement into this site.

## Shopper
I decided to allow differing features depending on if the shopper was logged in, or browsing the site without logging in. Unless designated an admin, they do not have access to the admin/designer pages and get automatically redirected if they attempt to access the pages via direct url.

### Just Browsing
While not logged in, the shopper has the ability to view all the products and the prices. They do not see any customization fields, "add to cart", or newsletter options.
### Logged In
While logged in they have full access to the shopper portion of the site and get redirected to the home page automatically upon successful login. Users see fields to customize the products and add them to a cart. Users can also access their profile where they can see any previous orders (demo account to preview this feature has not been implemented at this time) and opt in or out of the newsletter.

## Admin/Designer
As an admin or designer, you have access to the full site. Upon logging in you get redirected automatically to the admin's dashboard where you can see all the active orders (including all needed details on the product, who designed it, and the shipping address) as well as make any changes to the inventory that is needed. I built a 3 step wizard to make adding and editing the items easier for the user.

## Tech Used
This uses bcrypt for authorization as well as react-redux for front end information management, stripe for payments, and Nodemailer for newsletters.

### Site Demo
http://www.a-and-a-designs.us/#/
- Stripe is implemented but in demo mode
- user registration is available, but admin testing is not implemented at this time.
