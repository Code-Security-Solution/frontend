import { MyFilesResult } from '@/types/users';

export const MOCK_MY_FILES: MyFilesResult = {
  files: [
    {
      created_at: new Date('Wed, 07 May 2025 11:08:07 GMT'),
      download_links: {
        source_single: 'https://example.com/source_single',
        source_all: 'https://example.com/source_all',
        result: 'https://example.com/result',
        translated_result: 'https://example.com/translated_result',
        view_summary: 'https://example.com/view_summary',
        view_result: 'https://example.com/view_result',
      },
      email: 'admin@email.com',
      file_id: 'example_scan_id1',
      result_file: 'results/example_scan_id/result_file',
      translated_result_file: 'results/example_scan_id/translated_result_file',
      file_path: ['uploads/example_scan_id/example_file_1.cpp'],
    },
    {
      created_at: new Date('Wed, 07 May 2025 11:08:07 GMT'),
      download_links: {
        source_single: 'https://example.com/source_single',
        source_all: 'https://example.com/source_all',
        result: 'https://example.com/result',
        translated_result: 'https://example.com/translated_result',
        view_summary: 'https://example.com/view_summary',
        view_result: 'https://example.com/view_result',
      },
      email: 'admin@email.com',
      file_id: 'example_scan_id2',
      result_file: 'results/example_scan_id/result_file',
      translated_result_file: 'results/example_scan_id/translated_result_file',
      file_path: ['uploads/example_scan_id/example_file_2.cpp'],
    },
    {
      created_at: new Date('Wed, 07 May 2025 11:08:07 GMT'),
      download_links: {
        source_single: 'https://example.com/source_single',
        source_all: 'https://example.com/source_all',
        result: 'https://example.com/result',
        translated_result: 'https://example.com/translated_result',
        view_summary: 'https://example.com/view_summary',
        view_result: 'https://example.com/view_result',
      },
      email: 'admin@email.com',
      file_id: 'example_scan_id3',
      result_file: 'results/example_scan_id/result_file',
      translated_result_file: 'results/example_scan_id/translated_result_file',
      file_path: ['uploads/example_scan_id/example_file_3.cpp'],
    },
  ],
  files_count: 2,
  files_list: ['example_file_1.cpp', 'example_file_2.cpp', 'example_file_3.cpp'],
  user_email: 'admin@email.com',
};
