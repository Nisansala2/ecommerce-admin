# TODO: Create Supabase PostgreSQL Database Tables Correctly

- [x] Update models/index.js to import sequelize from config/database.js instead of creating a new one.
- [x] Add categoryId (UUID, allowNull: false) to Product model in models/Product.js.
- [x] Add id (UUID) and timestamps to Setting model in models/Setting.js.
- [x] Update syncTables.js to import all models from models/index.js and sync sequelize.
- [x] Change Category id to UUID for consistency.
- [x] Run node syncTables.js to create tables in Supabase.
- [x] Verify tables are created correctly.
