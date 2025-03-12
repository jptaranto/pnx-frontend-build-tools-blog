<?php

declare(strict_types=1);

namespace Drupal\ca_ds\ThemeObject;

use Drupal\ca_ds\CaDs\CaObjectTrait;
use Drupal\ca_profile\Entity\BlockContent\Card as CardBlock;
use Drupal\ca_profile\Entity\Interface\CardMetaInterface;
use Drupal\ca_profile\Entity\Interface\PictureInterface;
use Drupal\ca_profile\Entity\Node\CaNodeBase;
use Drupal\ca_profile\Traits\LinkBuilderTrait;
use Drupal\Core\Cache\CacheableDependencyInterface;
use Drupal\Core\Url;
use Pinto\Attribute\Asset\Css;
use Pinto\Attribute\ObjectType\Slots;
use Pinto\Slots\Build;
use Pinto\Slots\Slot;

#[Slots(
  slots: [
    new Slot(name : 'title'),
    new Slot(name : 'description'),
  ],
)]
final class Card implements CacheableDependencyInterface {

  use LinkBuilderTrait;

  public function __construct(
      private readonly string $title,
      private readonly Url $link,
      private readonly ?string $description,
  ) {}

  public function __invoke(): mixed {
    return $this->pintoBuild(static function (Build $build): Build {
      return $build
        ->set('title', self::buildLink($this->title, $this->link))
        ->set('description', $this->description);
    });
  }

}
