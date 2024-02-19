module.exports = {
    paths: {
        "/create": {
            post: {
                summary: "Create a new task",
                operationId: "createTask",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Task"
                            }
                        }
                    }
                },
                responses: {
                    '201': {
                        description: "create task sucess"
                    },
                    '500': {
                        description: "server error"
                    }
                }
            }
        },
        "/": {
            get: {
                summary: "get all task",
                operationId: "getTasks",
                responses: {
                    '200': {
                        description: "get all task sucessfull",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/components/schemas/Task"
                                    }
                                }
                            }
                        }
                    },
                    '500': {
                        description: "server error"
                    }
                }
            }
        },
        "/id/{_id}": {
            get: {
                summary: "get task  by id",
                operationId: "getTaskById",
                parameters: [
                    {
                        in: "path",
                        name: "_id",
                        required: true,
                        description: "task  _id",
                        schema: {
                            type: "string"
                        }
                    }
                ],
                responses: {
                    '200': {
                        description: "sucess to get task",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/Task"
                                }
                            }
                        }
                    },
                    '500': {
                        description: "server error"
                    }
                }
            },
            delete: {
                summary: "detele a task by ID",
                operationId: "deleteTask",
                parameters: [
                    {
                        in: "path",
                        name: "_id",
                        required: true,
                        description: "ID de la tarea a eliminar",
                        schema: {
                            type: "string"
                        }
                    }
                ],
                responses: {
                    '200': {
                        description: "Tarea eliminada exitosamente",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/Task"
                                }
                            }
                        }
                    },
                    '500': {
                        description: "Error del servidor"
                    }
                }
            }
        }
    }
};