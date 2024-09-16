import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/todo'), // MongoDB 연결 URL을 적절히 수정하세요
    TodosModule,
  ],
})
export class AppModule {}