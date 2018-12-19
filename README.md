# Folwell theme for Drupal 8

This repository includes the Folwell theme for Drupal 8 as part of the Drupal 8 Enterprise and Lite products supported by OIT at the University of Minnesota. Folwell is the recommended base theme for all Drupal 8 sites going forward, and will be the theme installed by default for all new Drupal 8 sites beginning in January 2019.

Folwell is built with Node Sass and Gulp, and uses the Bourbon and Bitters libraries. It uses the Drupal 8 [Neato](https://www.drupal.org/project/neato) base theme. See below for build instructions for local installs.

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

To provide additional layouts for Layout Builder, the Drupal 8 platform includes the Radix Layouts module, which will be familiar to users of UMNs Drupal 7 platform, and enabling that module is recommended. Any additional layouts that might be added to the platform in the future will be included in the Folwell Components module.

## Building Folwell