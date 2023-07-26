"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BlogController {
    constructor() {
        this.findAll = async (req, res) => {
            let blog = await this.BlogService.getAll();
            res.json(blog);
        };
    }
}
exports.default = new BlogController();
//# sourceMappingURL=BlogController.js.map