import { CircleQuestionMark, LucideBadgeCheck } from "lucide-react";
import { useState } from "react";
import { createPortal } from "react-dom";

export default function HelpButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Nút ? nổi góc phải */}
      <button className="button"
        onClick={() => setOpen(true)}
      > <CircleQuestionMark/> </button>

      {/* Modal */}
      {open && createPortal(
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-lg shadow-xl overflow-y-auto max-h-[80vh]">
            <h2 className="text-2xl font-bold mb-4">Giới thiệu</h2>

            <p className="mb-3">
              Đây là <b>ứng dụng lập trình kéo thả hướng đối tượng</b>, 
              cho phép bạn xây dựng logic bằng các khối (blocks) trực quan.
            </p>

            <h3 className="text-lg font-semibold mt-4 mb-2">Hướng dẫn sử dụng</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Kéo thả các khối lệnh từ menu bên trái vào vùng làm việc.</li>
              <li>Kết nối các khối để tạo thành chương trình.</li>
              <li>Ứng dụng hiện <b>không hỗ trợ Events</b> (sự kiện).</li>
              <li>Mã lệnh của bạn sẽ được dịch song song sang <b>JavaScript</b>.</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4 mb-2">Tác giả</h3>
            <p className="text-gray-700">Thành Nguyên</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">Thông tin thêm</h3>
            <p className="text-gray-700">
              - Ứng dụng được thiết kế cho học tập và thử nghiệm ý tưởng nhanh chóng.<br />
              - Tương thích trên PC và mobile.<br />
              - Dữ liệu nhân vật và code được lưu trong phiên làm việc.<br />
              - Kích thước Sân khấu: 800x450 (tỉ lệ 16:9, lưới 50x50). <br />
            </p>

            <button
              onClick={() => setOpen(false)}
              className="button top-4 right-4 bg-primary"
            >
              <LucideBadgeCheck/>
            </button>
          </div>
        </div>, document.body
      )}
    </>
  );
}
