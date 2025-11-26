import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './BlogResults.css';

const stemCellArticulationTreatments = [
  {
    id: 1,
    title: 'Knee Stem Cell Treatment – 50 Million Mesenchymal Stem Cells & and MRI',
    url: '/stem-cell-category-treatment-protocol/stem-cell-articulation-treatments/knee-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-1.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 2,
    title: 'Shoulder Stem Cell Treatment – 50 Million Mesenchymal Stem Cells + PRP & and MRI',
    url: '/stem-cell-category-treatment-protocol/stem-cell-articulation-treatments/shoulder-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-1.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 3,
    title: 'Thumb Stem Cell Treatment – 25 Million Mesenchymal Stem Cells',
    url: '/stem-cell-category-treatment-protocol/stem-cell-articulation-treatments/thumb-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-1.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 4,
    title: 'Fingers Stem Cell Treatment – 10 Million Mesenchymal Stem Cells per finger',
    url: '/stem-cell-category-treatment-protocol/stem-cell-articulation-treatments/fingers-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-1.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 5,
    title: 'Big Toe Stem Cell Treatment – 25 Million Mesenchymal Stem Cells',
    url: '/stem-cell-category-treatment-protocol/stem-cell-articulation-treatments/big-toe-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-1.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 6,
    title: 'Hip Stem Cell Treatment – 50 Million Mesenchymal Stem Cells + PRP & and MRI',
    url: '/stem-cell-category-treatment-protocol/stem-cell-articulation-treatments/hip-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-1.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 7,
    title: 'Elbow Stem Cell Treatment – 50 Million Mesenchymal Stem Cells & and MRI',
    url: '/stem-cell-category-treatment-protocol/stem-cell-articulation-treatments/elbow-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-1.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 8,
    title: 'Tennis Elbow Stem Cell Treatment – 50 Million Mesenchymal Stem Cells & and MRI',
    url: '/stem-cell-category-treatment-protocol/stem-cell-articulation-treatments/tennis-elbow-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-1.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 9,
    title: 'Golfer\'s Elbow Stem Cell Treatment – 50 Million Mesenchymal Stem Cells & and MRI',
    url: '/stem-cell-category-treatment-protocol/stem-cell-articulation-treatments/golfers-elbow-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-1.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 10,
    title: 'Ankle Stem Cell Treatment – 50 Million Mesenchymal Stem Cells & and MRI',
    url: '/stem-cell-category-treatment-protocol/stem-cell-articulation-treatments/ankle-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-1.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 11,
    title: 'Foot Stem Cell Treatment – 50 Million Mesenchymal Stem Cells & MRI',
    url: '/stem-cell-category-treatment-protocol/stem-cell-articulation-treatments/foot-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-1.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 12,
    title: 'Plantar Fasciitis Stem Cell Treatment – 50 Million Mesenchymal Stem Cells & an MRI',
    url: '/stem-cell-category-treatment-protocol/stem-cell-articulation-treatments/plantar-fasciitis-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-1.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 13,
    title: 'Wrist Stem Cell Treatment – 25 Million Mesenchymal Stem Cells & an MRI',
    url: '/stem-cell-category-treatment-protocol/stem-cell-articulation-treatments/wrist-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-1.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 14,
    title: 'Neck Pain Stem Cell Treatment – 100 Million MSC around most affected Vertebrae + 100 Million MSC IV',
    url: '/stem-cell-category-treatment-protocol/stem-cell-articulation-treatments/neck-pain-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-1.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 15,
    title: 'Middle Back Stem Cell Treatment – 100 Million MSC around most affected Vertebrae + 100 Million MSC IV',
    url: '/stem-cell-category-treatment-protocol/stem-cell-articulation-treatments/middle-back-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-1.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 16,
    title: 'Lower Back Stem Cell Treatment – 100 Million MSC around most affected Vertebrae + 100 Million MSC IV',
    url: '/stem-cell-category-treatment-protocol/stem-cell-articulation-treatments/lower-back-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-1.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 17,
    title: 'Sciatica Stem Cell Treatment – 100 Million MSCs direct into the lower back + 100 Million MSCs IV',
    url: '/stem-cell-category-treatment-protocol/stem-cell-articulation-treatments/sciatica-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-1.webp',
    imageWidth: 1200,
    imageHeight: 300
  }
];

const stemCellAutoimmuneTreatments = [
  {
    id: 18,
    title: 'Alcoholic Liver Disease Stem Cell Treatment',
    url: '/stem-cell-category-treatment-protocol/stem-cell-autoimmune-treatments/alcoholic-liver-disease-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-2.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 19,
    title: 'ARDS Stem Cell Treatment (Acute Respiratory Distress Syndrome)',
    url: '/stem-cell-category-treatment-protocol/stem-cell-autoimmune-treatments/ards-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-2.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 20,
    title: 'Congestive Heart Failure or Heart Attack Stem Cell Treatment',
    url: '/stem-cell-category-treatment-protocol/stem-cell-autoimmune-treatments/congestive-heart-failure-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-2.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 21,
    title: 'COPD Stem Cell Treatment (Chronic Obstructive Pulmonary Disease)',
    url: '/stem-cell-category-treatment-protocol/stem-cell-autoimmune-treatments/copd-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-2.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 22,
    title: 'Crohn\'s Disease Stem Cell Treatment',
    url: '/stem-cell-category-treatment-protocol/stem-cell-autoimmune-treatments/crohns-disease-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-2.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 23,
    title: 'Early Onset Dementia Stem Cell Treatment',
    url: '/stem-cell-category-treatment-protocol/stem-cell-autoimmune-treatments/early-onset-dementia-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-2.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 24,
    title: 'Fatty Liver Disease Stem Cell Treatment',
    url: '/stem-cell-category-treatment-protocol/stem-cell-autoimmune-treatments/fatty-liver-disease-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-2.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 25,
    title: 'Fibromyalgia Stem Cell Treatment',
    url: '/stem-cell-category-treatment-protocol/stem-cell-autoimmune-treatments/fibromyalgia-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-2.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 26,
    title: 'Hashimoto\'s Disease Stem Cell Treatment',
    url: '/stem-cell-category-treatment-protocol/stem-cell-autoimmune-treatments/hashimotos-disease-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-2.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 27,
    title: 'Hereditary Spastic Paraplegia Stem Cell Treatment',
    url: '/stem-cell-category-treatment-protocol/stem-cell-autoimmune-treatments/hereditary-spastic-paraplegia-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-2.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 28,
    title: 'High Blood Pressure Stem Cell Treatment',
    url: '/stem-cell-category-treatment-protocol/stem-cell-autoimmune-treatments/high-blood-pressure-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-2.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 29,
    title: 'Hypertension Stem Cell Treatment',
    url: '/stem-cell-category-treatment-protocol/stem-cell-autoimmune-treatments/hypertension-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-2.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 30,
    title: 'Irritable Bowel Syndrome – IBS Stem Cell Treatment',
    url: '/stem-cell-category-treatment-protocol/stem-cell-autoimmune-treatments/irritable-bowel-syndrome-ibs-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-2.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 31,
    title: 'Kidney Disease Stem Cell Treatment',
    url: '/stem-cell-category-treatment-protocol/stem-cell-autoimmune-treatments/kidney-disease-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-2.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 32,
    title: 'Liver Disease Stem Cell Treatment',
    url: '/stem-cell-category-treatment-protocol/stem-cell-autoimmune-treatments/liver-disease-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-2.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 33,
    title: 'Liver Cirrhosis Stem Cell Treatment',
    url: '/stem-cell-category-treatment-protocol/stem-cell-autoimmune-treatments/liver-cirrhosis-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-2.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 34,
    title: 'Lupus Stem Cell Treatment',
    url: '/stem-cell-category-treatment-protocol/stem-cell-autoimmune-treatments/lupus-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-2.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 35,
    title: 'Multiple Sclerosis Stem Cell Treatment',
    url: '/stem-cell-category-treatment-protocol/stem-cell-autoimmune-treatments/multiple-sclerosis-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-2.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 36,
    title: 'Myasthenia Gravis Stem Cell Treatment',
    url: '/stem-cell-category-treatment-protocol/stem-cell-autoimmune-treatments/myasthenia-gravis-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-2.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 37,
    title: 'Nerve Repair Stem Cell Treatment',
    url: '/stem-cell-category-treatment-protocol/stem-cell-autoimmune-treatments/nerve-repair-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-2.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 38,
    title: 'Peripheral Neuropathy stem cell treatment to Heal Nerve Pain',
    url: '/stem-cell-category-treatment-protocol/stem-cell-autoimmune-treatments/peripheral-neuropathy-stem-cell-treatment-to-heal-nerve-pain',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-2.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 39,
    title: 'Post Heart Attack stem cell treatment for Fast Recovery',
    url: '/stem-cell-category-treatment-protocol/stem-cell-autoimmune-treatments/post-heart-attack-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-2.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 40,
    title: 'Primary Sclerosing Cholangitis Stem Cell Treatment',
    url: '/stem-cell-category-treatment-protocol/stem-cell-autoimmune-treatments/primary-sclerosing-cholangitis-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-2.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 41,
    title: 'Psoriasis Stem Cell Treatment',
    url: '/stem-cell-category-treatment-protocol/stem-cell-autoimmune-treatments/psoriasis-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-2.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 42,
    title: 'Renal Failure Stem Cell Treatment',
    url: '/stem-cell-category-treatment-protocol/stem-cell-autoimmune-treatments/renal-failure-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-2.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 43,
    title: 'Rheumatoid Arthritis Stem Cell Treatment',
    url: '/stem-cell-category-treatment-protocol/stem-cell-autoimmune-treatments/rheumatoid-arthritis-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-2.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 44,
    title: 'Stroke Stem Cell Therapy',
    url: '/stem-cell-category-treatment-protocol/stem-cell-autoimmune-treatments/stroke-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-2.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 45,
    title: 'Traumatic Brain Injury Stem Cell Treatment (TBI)',
    url: '/stem-cell-category-treatment-protocol/stem-cell-autoimmune-treatments/traumatic-brain-injury-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-2.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 46,
    title: 'Trigeminal Neuralgia Stem Cell Treatment',
    url: '/stem-cell-category-treatment-protocol/stem-cell-autoimmune-treatments/trigeminal-neuralgia-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-2.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 47,
    title: 'Type 2 Diabetes Stem Cell Treatment',
    url: '/stem-cell-category-treatment-protocol/stem-cell-autoimmune-treatments/type-2-diabetes-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-2.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 48,
    title: 'Ulcerative Colitis Stem Cell Treatment',
    url: '/stem-cell-category-treatment-protocol/stem-cell-autoimmune-treatments/ulcerative-colitis-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-2.webp',
    imageWidth: 1200,
    imageHeight: 300
  }
];

const stemCellAntiAgingTreatments = [
  {
    id: 49,
    title: '100 Million Stem Cell IV – Stem Cells to Reverse Aging: Anti-Aging Stem Cell Treatment',
    url: '/stem-cell-category-treatment-protocol/stem-cell-anti-aging-treatments/stem-cells-to-reverse-aging-anti-aging-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-3.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 50,
    title: '200 Million Mesenchymal Stem Cell IV',
    url: '/stem-cell-category-treatment-protocol/stem-cell-anti-aging-treatments/200-million-stem-cell-iv',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-3.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 51,
    title: '300 Million Stem Cell IV Treatment',
    url: '/stem-cell-category-treatment-protocol/stem-cell-anti-aging-treatments/300-million-stem-cell-iv-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-3.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 52,
    title: 'Facial Stem Cell Treatment',
    url: '/stem-cell-category-treatment-protocol/stem-cell-anti-aging-treatments/stem-cell-facial-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-3.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 53,
    title: 'Hair Restoration Stem Cell Treatment 2025',
    url: '/stem-cell-category-treatment-protocol/stem-cell-anti-aging-treatments/hair-restoration-stem-cell-treatment-2025',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-3.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 54,
    title: 'Penis P Shot Stem Cell Treatment',
    url: '/stem-cell-category-treatment-protocol/stem-cell-anti-aging-treatments/stem-cell-p-shot',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-3.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 55,
    title: 'Vagina V Shot Stem Cell Treatment',
    url: '/stem-cell-category-treatment-protocol/stem-cell-anti-aging-treatments/stem-cell-v-shot',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-3.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 56,
    title: 'Prostate Stem Cell Treatment',
    url: '/stem-cell-category-treatment-protocol/stem-cell-anti-aging-treatments/enlarged-prostate-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-3.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 57,
    title: 'Intrathecal Stem Cell Treatment For Brain Optimization',
    url: '/stem-cell-category-treatment-protocol/stem-cell-anti-aging-treatments/intrathecal-stem-cell-injection-treatment-for-brain-optimization',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-3.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 58,
    title: 'Nebulized Stem Cell Treatment',
    url: '/stem-cell-category-treatment-protocol/stem-cell-anti-aging-treatments/nebulized-mesenchymal-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-3.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 59,
    title: 'Receding Gums Stem Cell Treatment',
    url: '/stem-cell-category-treatment-protocol/stem-cell-anti-aging-treatments/receding-gums-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-3.webp',
    imageWidth: 1200,
    imageHeight: 300
  }
];

const regenerativeMedicationsTreatments = [
  {
    id: 60,
    title: 'NGENLA HGH 1 Year Package – New Once a Week Injection HGH',
    url: '/stem-cell-category-treatment-protocol/regenerative-medications/hgh-pfizer-ngenla-somatrogon-ghla',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-HGH-and-TRT-Banner-1.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 61,
    title: 'HGH – Merck Saizen 1 Year HGH Package (240mg/720IU)',
    url: '/stem-cell-category-treatment-protocol/regenerative-medications/merck-saizen-hgh-legal-fly-and-buy-package',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-HGH-and-TRT-Banner-1.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 62,
    title: 'Pfizer Genotropin HGH Pen 1 Year HGH Package (720IU)',
    url: '/stem-cell-category-treatment-protocol/regenerative-medications/buy-the-pfizer-genotropin-hgh-pen-package',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-HGH-and-TRT-Banner-1.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 63,
    title: 'Modafinil 200mg – The Smart Drug',
    url: '/stem-cell-category-treatment-protocol/regenerative-medications/modafinil-for-sale',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-HGH-and-TRT-Banner-1.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 64,
    title: 'Rybelsus Semaglutide Pills for Rapid Weight Loss Package',
    url: '/stem-cell-category-treatment-protocol/regenerative-medications/rybelsus-semaglutide-pills-package-6-months',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-HGH-and-TRT-Banner-1.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 65,
    title: 'Cerebrolysin – Brain Regeneration and Optimization',
    url: '/stem-cell-category-treatment-protocol/regenerative-medications/cerebrolysin-for-brain-optimization',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-HGH-and-TRT-Banner-1.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 66,
    title: 'Metformin for Anti-Aging and Weight Loss',
    url: '/stem-cell-category-treatment-protocol/regenerative-medications/metformin-weight-loss-package',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-HGH-and-TRT-Banner-1.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 67,
    title: 'Testosterone Cream 150mg for 1 Year TRT Package',
    url: '/stem-cell-category-treatment-protocol/regenerative-medications/testosterone-cream-150mg-for-1-year-trt-package',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-HGH-and-TRT-Banner-1.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 68,
    title: 'Sostenon 250 TRT for 1 Year Package',
    url: '/stem-cell-category-treatment-protocol/regenerative-medications/sustenon-250-trt-1-year-package',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-HGH-and-TRT-Banner-1.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 69,
    title: 'Primoteston Testosterone Enanthate TRT for 1 Year Package',
    url: '/stem-cell-category-treatment-protocol/regenerative-medications/trt-enanthate-with-primoteston-for-1-year-package',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-HGH-and-TRT-Banner-1.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 70,
    title: 'Progesterone Cream 50mg',
    url: '/stem-cell-category-treatment-protocol/regenerative-medications/progesterone-cream-50mg',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-HGH-and-TRT-Banner-1.webp',
    imageWidth: 1200,
    imageHeight: 300
  }
];

const StemCellResults = ({ filters }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;
  const resultsSectionRef = useRef(null);

  // Filter posts by selected category
  const getFilteredPosts = () => {
    // If no filters selected, show ALL treatments from all categories
    if (!filters || !filters.conditions || filters.conditions.length === 0) {
      return [
        ...stemCellArticulationTreatments,
        ...stemCellAutoimmuneTreatments,
        ...stemCellAntiAgingTreatments,
        ...regenerativeMedicationsTreatments
      ];
    }
    
    const selectedCategory = filters.conditions[0];
    
    // Return appropriate array based on selected category
    if (selectedCategory === 'stem-cell-articulation') {
      return [...stemCellArticulationTreatments];
    } else if (selectedCategory === 'stem-cell-autoimmune') {
      return [...stemCellAutoimmuneTreatments];
    } else if (selectedCategory === 'stem-cell-anti-aging') {
      return [...stemCellAntiAgingTreatments];
    } else if (selectedCategory === 'regenerative-medications') {
      return [...regenerativeMedicationsTreatments];
    } else {
      // For unknown categories, return empty array
      return [];
    }
  };

  const filteredPosts = getFilteredPosts();
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  // When filters change, scroll to results section
  useEffect(() => {
    if (resultsSectionRef.current && filters) {
      resultsSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setCurrentPage(1);
  }, [filters]);

  const handlePageChange = (e, page) => {
    e.preventDefault();
    setCurrentPage(page);
    if (resultsSectionRef.current) {
      resultsSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const renderPagination = () => {
    const pages = [];

    if (totalPages <= 4) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <a
            key={i}
            href="#"
            className={currentPage === i ? 'active' : ''}
            onClick={(e) => handlePageChange(e, i)}
            data-page={i}
          >
            {i}
          </a>
        );
      }
      return pages;
    }

    let lastPageToShow = currentPage === totalPages ? currentPage : currentPage + 1;
    lastPageToShow = Math.max(3, lastPageToShow);
    
    if (lastPageToShow >= totalPages - 1) {
      lastPageToShow = totalPages - 1;
    }

    for (let i = 1; i <= lastPageToShow; i++) {
      pages.push(
        <a
          key={i}
          href="#"
          className={currentPage === i ? 'active' : ''}
          onClick={(e) => handlePageChange(e, i)}
          data-page={i}
        >
          {i}
        </a>
      );
    }

    if (lastPageToShow < totalPages - 1) {
      pages.push(<span key="dots-end" className="dots">...</span>);
    }

    if (totalPages > 1) {
      pages.push(
        <a
          key={totalPages}
          href="#"
          className={currentPage === totalPages ? 'active' : ''}
          onClick={(e) => handlePageChange(e, totalPages)}
          data-page={totalPages}
        >
          {totalPages}
        </a>
      );
    }

    return pages;
  };

  // Don't render if no posts match the filter
  if (filteredPosts.length === 0) {
    return null;
  }

  return (
    <section className="blog-results-section" ref={resultsSectionRef}>
      <div className="blog-results-container">
        <div id="filter-results" style={{ opacity: 1 }}>
          <div className="posts-grid">
            {currentPosts.map((post) => {
              const cleanUrl = post.url.replace(/\/$/, '');
              
              return (
                <div key={post.id} className="post-item">
                  <div className="thumbnail">
                    <Link to={cleanUrl}>
                      <img
                        src={post.image}
                        className="attachment-full size-full wp-post-image"
                        alt={post.title || 'Stem Cell Treatment'}
                        decoding="async"
                        loading="lazy"
                        width={post.imageWidth || 1200}
                        height={post.imageHeight || 300}
                      />
                    </Link>
                  </div>
                  <h3 className="title" style={{ marginBottom: '20px' }}>
                    <Link to={cleanUrl}>
                      {post.title}
                    </Link>
                  </h3>
                  {/* No meta section (no author or date) */}
                  <Link className="read-more" to={cleanUrl} style={{ marginTop: 'auto' }}>
                    Read More{' '}
                    <img
                      src="https://qckinetix.com/wp-content/uploads/2025/04/Group-503.svg"
                      alt="Arrow Icon"
                      style={{ marginLeft: '8px', width: '13px', height: '11px' }}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
          {totalPages > 1 && (
            <div className="pagination">{renderPagination()}</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default StemCellResults;

