import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BlogEntity } from "../../database/entities/blog.entity";

@Injectable()
export class BlogService {
  constructor(@InjectRepository(BlogEntity) private blogRepository: Repository<BlogEntity>) {}

  findAllBlogs() {
    return this.blogRepository.find({
      relations: {
        user: true
      }
    })
  }
}