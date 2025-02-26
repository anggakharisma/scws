import { sql } from "drizzle-orm";
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users", {
    id: int().primaryKey({ autoIncrement: true }),
    supabase_id: text("supabase_id").notNull().unique(),
    name: text(),
    email: text().notNull().unique(),
    userType: text().default('students'),
    createdAt: text("created_at")
        .notNull()
        .default(sql`(CURRENT_TIMESTAMP)`)
        .$onUpdate(() => sql`(CURRENT_TIMESTAMP)`),
    updatedAt: text("updated_at")
        .notNull()
        .default(sql`(CURRENT_TIMESTAMP)`)
        .$onUpdate(() => sql`(CURRENT_TIMESTAMP)`),
});

export const User = typeof usersTable.$inferSelect;
export const UserInsert = typeof usersTable.$inferInsert;

export const rolesTable = sqliteTable('roles', {
    id: int().primaryKey({ autoIncrement: true }),
    name: text().notNull(),
    description: text(),
})

export const permissionsTable = sqliteTable('permissions', {
    id: int().primaryKey({ autoIncrement: true }),
    name: text().notNull(),
    description: text(),
})

export const rolesPermissionsTable = sqliteTable('roles_permissions', {
    role_id: text().notNull(),
    permissions_id: text().notNull(),
})

export const rolesUserTable = sqliteTable('roles_users', {
    role_id: text().notNull(),
    user_id: text().notNull(),
})
