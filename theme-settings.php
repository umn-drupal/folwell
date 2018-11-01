<?php

/**
 * @file
 * Contains the theme's settings form.
 */

use Drupal\Core\Form\FormStateInterface;

/**
 * Implements hook_form_system_theme_settings_alter().
 */
function folwell_form_system_theme_settings_alter(&$form, FormStateInterface &$form_state, $form_id = NULL) {
  // Work-around for a core bug affecting admin themes. See issue #943212.
  if (isset($form_id)) {
    return;
  }

  $site_config = \Drupal::config('system.site');
  $site_name = !empty($site_config->get('name')) ? $site_config->get('name') : '';
  unset($form['logo']);
  $form['theme_settings']['#open'] = FALSE;
  $form['favicon']['default_favicon']['#default_value'] = theme_get_setting('favicon.use_default');
  $form['header_options'] = [
    '#type' => 'details',
    '#title' => t('Header options'),
    '#open' => TRUE,
  ];
  $form['header_options']['campus_select'] = [
    '#type' => 'radios',
    '#title' => t('Select campus'),
    '#default_value' => theme_get_setting('campus_select'),
    '#options' => [
      'umnhf-campus-tc' => 'Twin Cities',
      'umnhf-campus-c' => 'Crookston',
      'umnhf-campus-d' => 'Duluth',
      'umnhf-campus-e' => 'Extension',
      'umnhf-campus-m' => 'Morris',
      'umnhf-campus-r' => 'Rochester',
    ],
  ];
  $form['header_options']['dtd_select'] = [
    '#type' => 'radios',
    '#title' => t('Use "Driven to Discover"'),
    '#default_value' => theme_get_setting('dtd_select'),
    '#options' => [
      'dtd' => t('yes'),
      'no-dtd' => t('no'),
    ],
  ];
  $form['header_options']['header_color'] = [
    '#type' => 'radios',
    '#title' => t('Header background color'),
    '#default_value' => theme_get_setting('header_color'),
    '#options' => [
      'umnhf-background-maroon' => 'maroon',
      'umnhf-background-gold' => 'gold',
    ],
  ];
  $form['header_options']['campus_links'] = [
    '#type' => 'radios',
    '#title' => t('Use campus links'),
    '#options' => [
      'no-links' => 'No campus links',
      'links' => 'Include campus links',
    ],
    '#description' => t('Choose whether to include links to system campuses.'),
    '#default_value' => theme_get_setting('campus_links'),
  ];
  $form['header_options']['myu_text'] = [
    '#type' => 'radios',
    '#title' => t('MyU link text'),
    '#description' => t('Header MyU link can be configured to either "MyU: For Students, Faculty, and Staff" or just "MyU"'),
    '#options' => [
      'sfs' => 'use "For Students, Faculty, and Staff',
      'myu' => 'only use "MyU"',
    ],
    '#default_value' => theme_get_setting('myu_text'),
  ];
  $form['header_options']['mobile_search'] = [
    '#type' => 'radios',
    '#options' => [
      'dropdown' => 'Dropdown',
      'two-tier' => 'Search box always visible',
    ],
    '#default_value' => theme_get_setting('mobile_search'),
    '#title' => t('Mobile search box setting'),
    '#description' => t('Configure how search appears on small screens - expandable with a dropdown button, or always visible'),
  ];
  $form['site_identity'] = [
    '#type' => 'details',
    '#title' => t('Site/Unit Identity'),
    '#open' => TRUE,
  ];
  $form['site_identity']['first_line'] = [
    '#type' => 'textfield',
    '#states' => [
      'disabled' => [
        ':input[name="parent_unit"]' => [
          'empty' => FALSE
        ]
      ]
    ],
    '#title' => t('First line'),
    '#description' => t('Appears above site name. Useful for units with long names. You can only include one of "first line" or "parent unit" fields.'),
    '#default_value' => theme_get_setting('first_line')
  ];
  $form['site_identity']['site_name'] = [
    '#type' => 'textfield',
    '#title' => t('Site name'),
    '#default_value' => !empty(theme_get_setting('site_name')) ? theme_get_setting('site_name') : $site_name
  ];
  $form['site_identity']['parent_unit'] = [
    '#type' => 'textfield',
    '#states' => [
      'disabled' => [
        ':input[name="first_line"]' => [
          'empty' => FALSE
        ]
      ]
    ],
    '#title' => t('Parent unit'),
    '#description' => t('Appears above site name. Use to designate a College or parent administrative unit. You can only include one of "parent unit" or "first line" fields.'),
    '#default_value' => theme_get_setting('parent_unit')
  ];
  $form['site_identity']['parent_url'] = [
    '#type' => 'url',
    '#title' => t('Parent unit url'),
    '#description' => t('Provide a url for the parent unit; include http/https.'),
    '#default_value' => theme_get_setting('parent_url'),
    '#states' => [
      'visible' => [
        ':input[name="parent_unit"]' => [
          'empty' => FALSE
        ]
      ]
    ]
  ];
  $form['footer_options'] = [
    '#type' => 'details',
    '#title' => t('Footer options'),
    '#open' => TRUE,
  ];
  $form['footer_options']['privacy_link'] = [
    '#type' => 'textfield',
    '#default_value' => theme_get_setting('privacy_link'),
    '#title' => t('Privacy link'),
    '#description' => t('If you are using an alternative privacy statement, replace http://privacy.umn.edu with the appropriate url (include "http://" if on another site, or an absolute path - begins with "/" - if using a page on this website).'),
  ];
  $form['footer_options']['footer_date'] = [
    '#type' => 'radios',
    '#title' => t('Use "Current as of X" Date?'),
    '#options' => [
      0 => 'No',
      1 => 'Yes',
    ],
    '#default_value' => theme_get_setting('footer_date'),
  ];

  // We are editing the $form in place, so we don't need to return anything.
}
