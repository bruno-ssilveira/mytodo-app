import { mutation, query } from './_generated/server'
import { ConvexError, v } from 'convex/values';

export const getTodo = query({
	handler: async(ctx) => {
		return await ctx.db.query('todo').order('desc').collect();
	}
});

export const addTodo = mutation({
	args: { text: v.string() },
	handler: async(ctx, args) => {
		const todoId = await ctx.db.insert('todo', {
			text: args.text,
			isCompleted: false,
		});

		return todoId;
	},
});

export const toggleTodo = mutation({
	args:{ id: v.id('todo') },
	handler: async(ctx, args) => {
		const todo = await ctx.db.get(args.id);
		if(!todo) throw new ConvexError('Todo not found');

		await ctx.db.patch(args.id, {
			isCompleted: !todo.isCompleted,
		});
	},
});

export const deleteTodo = mutation({
	args: { id: v.id('todo') },
	handler: async(ctx, args) => {
		await ctx.db.delete(args.id);
	},
});

export const updateTodo = mutation({
	args: {
		id: v.id('todo'),
		text: v.string(),
	},
	handler: async(ctx, args) => {
		await ctx.db.patch(args.id, {
			text: args.text,
		});
	},
});

export const clearAllTodo = mutation({
	handler: async(ctx) => {
		const todos = await ctx.db.query('todo').collect();

		// Delete all todo
		for(const todo of todos) {
			await ctx.db.delete(todo._id);
		};

		return { deletedCount: todos.length };
	},
});