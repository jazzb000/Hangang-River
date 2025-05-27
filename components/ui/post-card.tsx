import Image from 'next/image';
import { Heart, MessageCircle, MoreHorizontal } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'; // Avatar 컴포넌트가 있다고 가정
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'; // 기존 Card 컴포넌트 활용

export interface PostData {
  id: string;
  author: {
    name: string;
    avatarUrl?: string;
    username?: string; // 사용자 ID 또는 닉네임 (선택)
  };
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  timestamp: string; // 예: "2시간 전" 또는 실제 Date 객체
}

interface PostCardProps {
  post: PostData;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden rounded-xl shadow-sm mb-4 border-0">
      {/* Post Header */}
      <CardHeader className="flex flex-row items-center justify-between p-3">
        <div className="flex items-center space-x-3">
          <Avatar className="h-10 w-10 border">
            {post.author.avatarUrl && <AvatarImage src={post.author.avatarUrl} alt={post.author.name} />}
            <AvatarFallback>{post.author.name.substring(0, 1).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-semibold text-gray-800">{post.author.name}</p>
            {post.author.username && <p className="text-xs text-gray-500">@{post.author.username}</p>}
          </div>
        </div>
        <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-700">
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </CardHeader>

      {/* Post Image */}
      <div className="relative w-full aspect-square">
        <Image
          src={post.imageUrl}
          alt={post.caption || '게시글 이미지'}
          fill
          className="object-cover"
          priority // 중요 이미지는 우선 로딩
        />
      </div>

      {/* Post Footer */}
      <CardFooter className="flex flex-col items-start p-3">
        <div className="flex items-center space-x-3 mb-2">
          <Button variant="ghost" size="icon" className="text-gray-700 hover:text-red-500">
            <Heart className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-700 hover:text-sky-500">
            <MessageCircle className="h-6 w-6" />
          </Button>
          {/* 다른 액션 버튼들 (예: 공유) 추가 가능 */}
        </div>
        <div className="px-1">
          <p className="text-sm text-gray-800 mb-1">
            <span className="font-semibold">{post.author.name}</span> {post.caption}
          </p>
          {post.likes > 0 && (
            <p className="text-sm font-semibold text-gray-800 mb-1">좋아요 {post.likes.toLocaleString()}개</p>
          )}
          {post.comments > 0 && (
             <Button variant="link" className="p-0 h-auto text-sm text-gray-500 hover:text-gray-700">
                댓글 {post.comments.toLocaleString()}개 모두 보기
            </Button>
          )}
          <p className="text-xs text-gray-400 uppercase">{post.timestamp}</p>
        </div>
      </CardFooter>
    </Card>
  );
} 