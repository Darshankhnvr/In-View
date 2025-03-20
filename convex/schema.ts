import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { EndpointMessageOutSerializer } from "svix/dist/models/endpointMessageOut";

export default defineSchema({
    users: defineTable ({
        name: v.string(),
        email: v.string(),
        image: v.optional(v.string()),
        role: v.union(v.literal("candidate"), v.literal("interviewer")), // cadidate or recruiter
        clerkId: v.string(),
        
    
    }).index("by_clerk_id", ["clerkId"]),

    interviews : defineTable({
        title: v.string(),
        description: v.optional(v.string()),
        startTime: v.number(),
        endTime:v.optional(v.number()) ,
        status: v.string(),
        streamCallerId: v.string(),
        candidateId: v.string(),
        interviewerId: v.string(),
            
        
    }).index("by_candidate_id", ["candidateId"])
    .index("by_interviewer_id", ["interviewerId"]),

    comments: defineTable({
        content: v.string(),
        rating : v.string(),
        interviewerId: v.string(),
        interviewId: v.string(),
    }).index("by_interview_id", ["interviewId"]),


})

// https://calm-muskrat-55.clerk.accounts.dev

