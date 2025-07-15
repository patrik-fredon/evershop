import React from 'react';
import { _ } from '@evershop/evershop/lib/locale/translate';

function Content() {
  return (
    <div className="page-width p-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8 border border-gray-200 text-center">
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            {_('Sorry!')}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {_('You are not old enough to view this site. Sorry!')}
          </p>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-500">
            {_('Age restricted content')} • {_('For adults only')}
          </p>
        </div>
      </div>
    </div>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 1
};

export default Content;
