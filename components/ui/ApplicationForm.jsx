// components/ui/ApplicationForm.jsx
import { useState } from 'react';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    why: '',
    agreed: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // 这里添加表单提交逻辑
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-8 max-w-2xl mx-auto my-8">
      <h3 className="text-2xl font-bold text-center mb-6">申请表单</h3>
      
      {/* 费用说明 */}
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <p className="text-gray-700">
          我们会审核您的申请资料，整个项目需要支付399元的费用，在录取后支付。
        </p>
        <div className="mt-3 flex items-center">
          <input
            type="checkbox"
            id="fee-confirm"
            checked={formData.agreed}
            onChange={(e) => setFormData({...formData, agreed: e.target.checked})}
            className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
          />
          <label htmlFor="fee-confirm" className="ml-2 text-gray-700">
            我已了解并同意上述费用说明
          </label>
        </div>
      </div>

      {/* 表单 */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            姓名
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            邮箱
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">
            公司
          </label>
          <input
            type="text"
            id="company"
            required
            value={formData.company}
            onChange={(e) => setFormData({...formData, company: e.target.value})}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="why" className="block text-sm font-medium text-gray-700">
            Why Pilot for you?
          </label>
          <textarea
            id="why"
            required
            value={formData.why}
            onChange={(e) => setFormData({...formData, why: e.target.value})}
            rows={4}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={!formData.agreed}
          className={`w-full rounded-md px-4 py-2 text-white text-center ${
            formData.agreed 
              ? 'bg-blue-600 hover:bg-blue-700' 
              : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          提交申请
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;