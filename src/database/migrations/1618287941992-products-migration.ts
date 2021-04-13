import { MigrationInterface, QueryRunner } from 'typeorm';

export class productsMigration1618287941992 implements MigrationInterface {
  name = 'productsMigration1618287941992';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `products` (`id` varchar(36) NOT NULL, `code` varchar(30) NOT NULL, `name` varchar(255) NOT NULL, `isActive` tinyint NOT NULL DEFAULT 1, UNIQUE INDEX `IDX_7cfc24d6c24f0ec91294003d6b` (`code`), UNIQUE INDEX `IDX_4c9fb58de893725258746385e1` (`name`), PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'CREATE TABLE `users` (`id` varchar(36) NOT NULL, `userName` varchar(30) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `firstName` varchar(30) NOT NULL, `lastName` varchar(30) NOT NULL, `isActive` tinyint NOT NULL DEFAULT 1, UNIQUE INDEX `IDX_226bb9aa7aa8a69991209d58f5` (`userName`), UNIQUE INDEX `IDX_97672ac88f789774dd47f7c8be` (`email`), PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'DROP INDEX `IDX_97672ac88f789774dd47f7c8be` ON `users`',
    );
    await queryRunner.query(
      'DROP INDEX `IDX_226bb9aa7aa8a69991209d58f5` ON `users`',
    );
    await queryRunner.query('DROP TABLE `users`');
    await queryRunner.query(
      'DROP INDEX `IDX_4c9fb58de893725258746385e1` ON `products`',
    );
    await queryRunner.query(
      'DROP INDEX `IDX_7cfc24d6c24f0ec91294003d6b` ON `products`',
    );
    await queryRunner.query('DROP TABLE `products`');
  }
}
