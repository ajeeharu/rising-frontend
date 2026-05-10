// src/constants/avatars.ts
export const AVATARS = [
    { id: 'cat', path: '/assets/images/cat.png', label: 'ねこ' },
    { id: 'tanuki', path: '/assets/images/tanuki.png', label: 'たぬき' },
    { id: 'raccoon', path: '/assets/images/raccoon.png', label: 'アライグマ' },
    { id: 'dog', path: '/assets/images/dog.png', label: 'いぬ' },
    { id: 'fox', path: '/assets/images/fox.png', label: 'きつね' },
    { id: 'panda', path: '/assets/images/panda.png', label: 'パンダ' },
    { id: 'rabbit', path: '/assets/images/rabbit.png', label: 'うさぎ' },
    { id: 'bear', path: '/assets/images/bear.png', label: 'くま' },
    { id: 'otter', path: '/assets/images/otter.png', label: 'カワウソ' },
    { id: 'pig', path: '/assets/images/pig.png', label: 'ぶた' },
    { id: 'deer', path: '/assets/images/deer.png', label: 'しか' },
    { id: 'zebra', path: '/assets/images/zebra.png', label: 'しまうま' },
    { id: 'elephant', path: '/assets/images/elephant.png', label: 'ぞう' },
    { id: 'horse', path: '/assets/images/horse.png', label: 'うま' },
    { id: 'monkey', path: '/assets/images/monkey.png', label: 'さる' },
    { id: 'kangaroo', path: '/assets/images/kangaroo.png', label: 'カンガルー' },
    // ...合計16個分定義
] as const;

export type AvatarId = typeof AVATARS[number]['id'];