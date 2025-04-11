import { ZodSchema, ZodError } from 'zod'
import { Request, Response, NextFunction } from 'express'
import { catchAsync } from '.'

const validationMiddleware = ({
    bodySchema,
    querySchema,
    paramsSchema,
}: {
    bodySchema?: ZodSchema
    querySchema?: ZodSchema
    paramsSchema?: ZodSchema
}) => {
    return catchAsync(
        async (req: Request, res: Response, next: NextFunction) => {
            try {
                req.body = bodySchema ? bodySchema.parse(req.body) : {}
                req.query = querySchema ? querySchema.parse(req.query) : {}
                req.params = paramsSchema ? paramsSchema.parse(req.params) : {}
                next()
            } catch (error) {
                if (error instanceof ZodError) {
                    const message = error.errors.map((err) => err.message)[0]
                    return res.status(400).json({
                        success: false,
                        message,
                    })
                }
                next(error)
            }
        },
    )
}

export default validationMiddleware
