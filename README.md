# Folwell theme for Drupal 8

This repository includes the Folwell theme for Drupal 8 as part of the Drupal 8 Enterprise and Lite products supported by OIT at the University of Minnesota. Folwell is the recommended base theme for all Drupal 8 sites going forward, and will be the theme installed by default for all new Drupal 8 sites beginning in January 2019.

Folwell is built with Node Sass and Gulp, and uses the Bourbon and Bitters libraries. It extends the Drupal 8 [Neato](https://www.drupal.org/project/neato) base theme. See below for [build instructions](#building-folwell) for local installs.

Sites currently using Folwell include [drupalmanagment.umn.edu](https://drupalmanagement.umn.edu). We will add to this list as sites adopt this theme, and Folwell receives a production release in January 2019.

## Recommended modules

Folwell expects the following modules to be enabled. All are available in the [UMN Drupal 8 platform repository](https://github.umn.edu/drupalplatform/d8-composer). Not all are currently enabled by default, but once Folwell becomes the default base theme for the platform, any new sites created in Drupal 8 will have all of these modules enabled out of the box.

If you're enabling Folwell on an existing site, it is recommended to use these modules:

- Font Awesome
- Superfish
- Responsive Menu
- Easy Breadcrumb

Additionally, UMN Search is assumed to be enabled on all sites using Folwell, and sites without that module enabled will not function correctly.

## Folwell Components

In addition to the recommended modules above, Folwell is also supplemented by the [Folwell Components](https://github.umn.edu/drupalmodules/folwell_components) module, available in the UMN Drupal 8 platform code. This module extends the Folwell theme and adds modular components including accordions, pull quotes, and callouts - those elements are not included in the Folwell theme itself. Additional modules that Folwell Components and its submodules require include:

- Paragraphs
- Tablefield

## Layout Builder

Folwell does not include a CSS grid system or layout tools beyond some rudimentary width/float classes; it is expected that this theme will be used in conjunction with Drupal 8's Layout Builder. Layout Builder is currently an "Experimental" module in Drupal 8.6, but is usable in its current state, and will be marked stable with the release of Drupal 8.7 in Spring 2019.

To provide additional layouts for Layout Builder, the Drupal 8 platform includes the Radix Layouts module, which will be familiar to users of UMNs Drupal 7 platform, and enabling that module is recommended. Any additional layouts that might be added to the platform in the future will be included in the [Folwell Components](#folwell-components) module.

There are sidebar regions in the theme for sitewide elements such as left vertical navigation (a themed version of which is not yet available). We request your feedback for the utilty of these sidebar regions and how we can adjust them to accommodate user needs.

## Theme Settings

Folwell includes some settings for site wide header & footer elements. Theme settings can be found at `admin/appearance/settings/folwell`.

## Building Folwell

Folwell is built with Node Sass and Gulp. In development as well as deployment, we use the 8.x LTS version (carbon) of Node as well as npm 6.5.x (this will likely change to the 10.x LTS version in early 2019). We recommend using [nvm](https://github.com/creationix/nvm) to enable controlling Node versions.

When building for remote deployment, our process includes installing Node lts/carbon, updating npm, and running gulp to build stylesheets, source maps, etc. We recommend the same for local builds:

```
nvm install lts/carbon
npm install -g npm
./node_modules/.bin/gulp sass
```

*Note:* A compiled version of Folwell is available as a release tag on the `dist` branch, currently `1.0.1`.  
