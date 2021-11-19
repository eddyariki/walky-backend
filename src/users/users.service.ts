import { Injectable, Inject, Logger } from '@nestjs/common';
import { CollectionReference, Timestamp } from '@google-cloud/firestore';
import { UserDocument } from './user.document';

@Injectable()
export class RawReadingsService {
  private logger: Logger = new Logger(RawReadingsService.name);

  constructor(
    @Inject(UserDocument.collectionName)
    private usersCollection: CollectionReference<UserDocument>,
  ) {}

  async create({ userId, name, username, email }): Promise<UserDocument> {
    const docRef = this.usersCollection.doc(userId);

    await docRef.set({
      userId,
      name,
      username,
      email,
    });
    const userDoc = await docRef.get();
    const user = userDoc.data();
    return user;
  }
}
