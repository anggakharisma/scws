import { sql } from "drizzle-orm";
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const userSchema = sqliteTable("users", {
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

export const User = typeof userSchema.$inferSelect;
export const UserInsert = typeof userSchema.$inferInsert;

export const roleSchema = sqliteTable('roles', {
    id: int().primaryKey({ autoIncrement: true }),
    name: text('name').notNull(),
    description: text(),
})

export const permissionSchema = sqliteTable('permissions', {
    id: int().primaryKey({ autoIncrement: true }),
    name: text().notNull(),
    description: text(),
})

export const rolePermissionSchema = sqliteTable('roles_permissions', {
    role_id: text().notNull(),
    permissions_id: text().notNull(),
})

export const rolesUserSchema = sqliteTable('roles_users', {
    role_id: text().notNull(),
    user_id: text().notNull(),
})

export const subjectSchema = sqliteTable('subjects', {
    id: int().primaryKey({ autoIncrement: true }),
    name: text().notNull(),
    description: text(),
})

export const scoreSchema = sqliteTable('user_scores', {
    id: int().primaryKey({ autoIncrement: true }),
    name: text().notNull(),
    description: text(),
})
