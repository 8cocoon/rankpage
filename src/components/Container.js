// Container.js

import React from 'react';
import RankPage from './RankPage';
import './Container.css';

const Container = () => {
  // 더미 상품 데이터
  const products = [
    {
      id: 1,
      ranking: 1,
      image: 'https://kream-phinf.pstatic.net/MjAyMDEwMjJfMjAx/MDAxNjAzMzMzOTg0NTM0.ZcNvgiRUi3W6rl_3blNEJZNJZDCrMBBODqO7CnbUQ5Ig.swlxpWVsdTYUAKqYZngSrLcOcq3Gqpt2476hLcarxgUg.PNG/p_24578_0_12444868e6114d3aab9ac3d675734f7a.png?type=m_webp',
      brand: 'Nike',
      englishName: 'Nike Challenger OG Light Bone',
      koreanName: '나이키 챌린저 OG 라이트 본',
      price: 95000,
      bookmarkCount: 673,
      reviewCount: 12,
    },
    {
      id: 2,
      ranking: 2,
      image: 'https://kream-phinf.pstatic.net/MjAyMzEwMzFfNjAg/MDAxNjk4NzM3OTQ5ODk3._TWWtAerceoAwfq73uIrAqkQ32w0n7eBlGZ9hvcM-ugg.6u075ieofKA0xmLmWvvRuldNgEpmSEE7i_DEOdcvjbsg.PNG/a_ffc80b40512f4de5bda84e2397bd915b.png?type=m_webp',
      brand: 'Adidas',
      englishName: 'Adidas X Crazyfast.4 TF Bright Roy al White',
      koreanName: '아디다스 X 크레이지패스트.4 TF 브라이트 로얄 화이트',
      price: 46000,
      bookmarkCount: 228,
      reviewCount: 1,
    },
    {
      id: 3,
      ranking: 3,
      image: 'https://kream-phinf.pstatic.net/MjAyMTAyMDFfMTg2/MDAxNjEyMTUzMjcyOTA5.F9JApbxta-8uC5mNdCAFLg8TReNcmJQpG1doiL83UqUg.PhfSNOVL1yf1R5yrEq8jn7lCaGtfmN5jdfD9G_1CGDUg.PNG/p_0c8e2b340e86467581cd87f432114df5.png?type=m_webp',
      brand: 'Nike',
      englishName: 'Nike Air Tailwind 79 Aurora Green',
      koreanName: '나이키 에어 테일윈드 79 오로라 그린',
      price: 35000,
      bookmarkCount: 109,
      reviewCount: 3,
    },
    {
      id: 4,
      ranking: 4,
      image: 'https://kream-phinf.pstatic.net/MjAyMjA3MjdfMjM4/MDAxNjU4OTA1NDMxNDg5.qAxoZklfERP4qoFVQG5c7jQ2vxxGpKgk2_wenYY6xFEg.CgWe5qLbk1-kKzlZOqn9ixQV_0x6zu5oEHB146u-FuYg.PNG/a_b7c31ba2ed0a4a5298a1c13bfd68d55f.png?type=m_webp',
      brand: 'Jordan',
      englishName: 'Jordan 1 Mid SE French Blue Fire Red',
      koreanName: '조던 1 미드 SE 프렌치 블루 파이어 레드',
      price: 180000,
      bookmarkCount: 3733,
      reviewCount: 99,
    },
    {
      id: 5,
      ranking: 5,
      image: 'https://kream-phinf.pstatic.net/MjAyMzEwMDVfMTIz/MDAxNjk2NDk2Mzk1Njg0.vXCUuYQxwhgixKipoRtYbNMNq9lQVIWVRlVI5WP5N58g.gqGW0IoA1U4eP6Y6x40m7QyH7jMtfnCc4grjVOwIeBAg.PNG/a_884ee8cdfbdd42fc9cc855711a52cbaa.png?type=m_webp',
      brand: 'New Balance',
      englishName: 'New Balance 574 White Tan',
      koreanName: '뉴발란스 574 화이트 탄',
      price: 83000,
      bookmarkCount: 519,
      reviewCount: 1,
    },

{
      id: 6,
      ranking: 6,
      image: 'https://kream-phinf.pstatic.net/MjAyMjEyMDhfMjY2/MDAxNjcwNDc4NzE4MDIz.4dDbAZtEDH3S8DV9I9CoMPYQLezfkKUFf6_eiNIw8sgg.g6Z5KQlG3dEhPtlnjQBso_jqZhS83YiJuJ2BOTJmpekg.PNG/a_bf837021f5bb402bb59360cc9e4e1be8.png?type=m_webp',
      brand: 'Jordan',
      englishName: 'Jordan 1 High Golf Midnight Navy',
      koreanName: '조던 1 하이 골프 미드나잇 네이비',
      price: 110000,
      bookmarkCount: 3628,
      reviewCount: 47,
    },

{
      id: 7,
      ranking: 7,
      image: 'https://kream-phinf.pstatic.net/MjAyMzA5MjdfMzAg/MDAxNjk1ODA5NDg5MDUx.H1Yihfca1EF1yf9yZqGxkPeTbFXwS98nSke9Xe6w8Zkg.hIw-MXVJSYjziCBMoxmIntLYzGHAPm8Z8L4GLEDSA4Ig.PNG/a_cb9bfe454fd2445b973a2ddfe93315fa.png?type=m_webp',
      brand: 'UGG',
      englishName: 'UGG Tasman Slipper Dusted Cocoa',
      koreanName: '어그 타스만 슬리퍼 더스티드 코코아',
      price: 167000,
      bookmarkCount: 613,
      reviewCount: 5,
    },
    {
      id: 8,
      ranking: 8,
      image: 'https://kream-phinf.pstatic.net/MjAyMTExMTJfODIg/MDAxNjM2NzE2MDQxMDU4.2F1q4jMK6noKO5TPm5BgkzY656vxS4x4mMs18tvLFyIg.MZeCMN4XN24U2A3xpXuPWJpnhptMvsSHHZpPZMmMrcwg.PNG/a_8e00daaadd2b41c6a5af6d804d750aa5.png?type=m_webp',
      brand: 'New Balance',
      englishName: 'New Balance 550 White Grey - D Standard',
      koreanName: '뉴발란스 550 화이트 그레이 - D 스탠다드',
      price: 89000,
      bookmarkCount: 265,
      reviewCount: 1,
    },
    {
      id: 9,
      ranking: 9,
      image: 'https://kream-phinf.pstatic.net/MjAyMzAxMTdfMTk0/MDAxNjczOTE3NTU0NzA4.ENz-mHmScxBJDj-tjsmRsrtVUOH4V04karrnYLgIuUsg.lw4U7zywAxIYpbTSKaFQYLb6L0q7pZTvFeK_d3g75kog.PNG/a_03f5cb01bb184de9a0748dd271b707fd.png?type=m_webp',
      brand: 'Nike',
      englishName: 'Nike Dunk Low Retro Black White',
      koreanName: '나이키 덩크 로우 레트로 블랙 화이트',
      price: 69000,
      bookmarkCount: 656,
      reviewCount: 2,
    },
    {
      id: 10,
      ranking: 10,
      image: 'https://kream-phinf.pstatic.net/MjAyMjA3MjFfMTkx/MDAxNjU4Mzc4NTM4MjMy.qfto-0YP1f6v-VhrShUzwqfSaBH8TOcwkArlDQA6QeMg.Q4W_RuAyw5xbH5_joe7taOoDMywE3JFKlLmz6cmz8hMg.PNG/a_b8acf1e9434245368bf87c2f42c5d983.png?type=m_webp',
      brand: 'Nike',
      englishName: 'Jordan 1 x Travis Scott Retro Low OG SP Sail and Ridgerock',
      koreanName: '조던 1 x 트래비스 스캇 레트로 로우 OG SP 세일 앤 리저록',
      price: 1200000,
      bookmarkCount: 28000,
      reviewCount: 3089,
    },
    {
      id: 11,
      ranking: 11,
      image: 'https://kream-phinf.pstatic.net/MjAyMzA0MjBfMTEx/MDAxNjgxOTU2Njc0NDY3.o6OGlNyDzM21Bh2CJCsbo3tP3tcFg8mf0hSuI2q9x0Mg.8bA1jo9feukh5VvuScwwodeyiIDx67IG5jnwT7PWhZsg.PNG/a_211c1f216b0847adaa7e73a4cc6c24e0.png?type=m_webp',
      brand: 'Nike',
      englishName: 'Nike Dunk Low Mica Green',
      koreanName: '나이키 덩크 로우 미카 그린',
      price: 82000,
      bookmarkCount: 3363,
      reviewCount: 14,
    },
    {
      id: 12,
      ranking: 12,
      image: 'https://kream-phinf.pstatic.net/MjAyMzExMjlfMzIg/MDAxNzAxMjM1MjUxNzU2.zizfAwdO1x0-bpnvuVPFaJOeEpMK0WHeUIxAhZVicVsg.aeaVDZLQoyJkM0JxnVEG7qk0wQso2ur4Nd9yfUGXWyYg.PNG/a_13e1f353c3f54cd7b2870b673e4e9e1f.png?type=m_webp',
      brand: 'Fila',
      englishName: 'Fila x Thug Club Replica 2002 Black',
      koreanName: '휠라 x 떠그 클럽 레플리카 2002 블랙',
      price: 304000,
      bookmarkCount: 567,
      reviewCount: 2,
    },    
    {
      id: 13,
      ranking: 13,
      image: 'https://kream-phinf.pstatic.net/MjAyMjEwMjFfMjMy/MDAxNjY2MzQzNzk1MTEz.5TrRdMgv6tIFN_WiVoC5YyPNSHD6VLHibYr6IhOkxvYg.i7QtPjmp3wp10CVqNVA6dajIDj8axCRpGaGqKK_AOlog.PNG/a_88f24903a3b140d08eeb99094ab86281.png?type=m_webp',
      brand: 'Salomon',
      englishName: 'Salomon RX Snug Moss Gray',
      koreanName: '살로몬 RX 스너그 모스 그레이',
      price: 154000,
      bookmarkCount: 8365,
      reviewCount: 95,
    },
    {
      id: 14,
      ranking: 14,
      image: 'https://kream-phinf.pstatic.net/MjAyMjA1MjRfMTI4/MDAxNjUzMzc3OTQyOTY4.XIgqbVbVCJyFvD47U8TushY6430cJ03bBqCIVdARkX0g.HH6_GNiSWduD7yGhJctIeF_4uFcXIucq6HxCjzy5zOUg.PNG/a_3f98868c62934c05b08b837092a372a6.png?type=m_webp',
      brand: 'Nike',
      englishName: `Nike Air Force 1 '07 Black White`,
      koreanName: `나이키 에어포스 1 '07 블랙 화이트`,
      price: 91000,
      bookmarkCount: 2417,
      reviewCount: 37,
    },
    {
      id: 15,
      ranking: 15,
      image: '',
      brand: 'New Balance',
      englishName: 'New Balance 9060 Sea Salt',
      koreanName: '뉴발란스 9060 씨 솔트',
      price: 153000,
      bookmarkCount: 558,
      reviewCount: 1,
    },
    {
      id: 16,
      ranking: 16,
      image: 'https://kream-phinf.pstatic.net/MjAyMzExMTVfNDAg/MDAxNzAwMDQxNjM2MjY3.mOLJFegYvlivzy-ca3BufCaNrTUL-L4PoGkfC9_4loIg.D60lEKi9DQD-BZl6JfT-bfhY7foML0Lzmx18ukRdhBog.PNG/a_63699aceeb454bcbbd54d1b91d7b152c.png?type=m_webp',
      brand: 'Jordan',
      englishName: 'Jordan 11 Retro Gratitude',
      koreanName: '조던 11 레트로 그래티튜드',
      price: 289000,
      bookmarkCount: 533,
      reviewCount: 11,
    },
    {
      id: 17,
      ranking: 17,
      image: '',
      brand: 'Nike',
      englishName: 'Nike x Kasina Air Max 1 SP Won-Ang Particle Grey',
      koreanName: '나이키 x 카시나 에어맥스 1 SP 원앙 파티클 그레이',
      price: 72000,
      bookmarkCount: 11000,
      reviewCount: 880,
    },
    {
      id: 18,
      ranking: 18,
      image: 'https://kream-phinf.pstatic.net/MjAyMzExMDFfNTYg/MDAxNjk4ODMxNTY5Njk3.Q9prPY6RuZY9de2ni3FjQqZcvDMwaHMb25Xcxei8EOIg.kXoapy6EbV5iBPboSLzw138X7jq-EGdXuiKDYxFagOcg.PNG/a_41c9d160ab164c2283da44741108ef52.png?type=m_webp',
      brand: 'Subu',
      englishName: 'Subu Permanent F-Line Dots',
      koreanName: '스부 퍼머넌트 F-라인 닷',
      price: 45000,
      bookmarkCount: 679,
      reviewCount: 37,
    },
    {
      id: 19,
      ranking: 19,
      image: '',
      brand: 'Nike',
      englishName: 'Nike Dunk Low Oil Green',
      koreanName: '나이키 덩크 로우 오일 그린',
      price: 117000,
      bookmarkCount: 1724,
      reviewCount: 8,
    },
    {
      id: 20,
      ranking: 20,
      image: 'https://kream-phinf.pstatic.net/MjAyMzExMTVfNDAg/MDAxNzAwMDQxNjM2MjY3.mOLJFegYvlivzy-ca3BufCaNrTUL-L4PoGkfC9_4loIg.D60lEKi9DQD-BZl6JfT-bfhY7foML0Lzmx18ukRdhBog.PNG/a_63699aceeb454bcbbd54d1b91d7b152c.png?type=m_webp',
      brand: 'Fila',
      englishName: 'Fila x Thug Club Replica 2002 Grey White',
      koreanName: '휠라 x 떠그 클럽 레플리카 2002 그레이 화이트',
      price: 289000,
      bookmarkCount: 282,
      reviewCount: 2,
    },
    // ... (다른 상품 데이터들)
  ];

  return (
    <div className="container">
      <RankPage title="남성 신발 인기 순위" products={products} />
    </div>
  );
};

export default Container;