<?php

use Terdelyi\Phanstatic\Config\ConfigBuilder;

if (getenv('ENV') === 'production') {
    $baseUrl = getenv('URL');
} else {
    $baseUrl = getenv('DEPLOY_URL') ? getenv('DEPLOY_URL') : 'http://localhost:8000';
}

return ConfigBuilder::make()
    ->setBaseUrl($baseUrl)
    ->setTitle('Web Developer - PHP, MySQL, Laravel, Symfony, WordPress')
    ->build();