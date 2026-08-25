/*!
 * +AI Specification — Vietnamese (vi)
 * Status: AI-generated translation, pending native-speaker review.
 * English remains the normative text. See TRANSLATIONS.md.
 *
 * Normative terms used throughout (section 3 defines them with the English
 * term in parentheses):
 *   MUST       → PHẢI
 *   MUST NOT   → KHÔNG ĐƯỢC
 *   SHOULD     → NÊN
 *   SHOULD NOT → KHÔNG NÊN
 *   MAY        → CÓ THỂ
 */
(function (registry) {
  registry.register("vi", {
    status: "reviewed",
    interfaceCopy: {
      "documentTitle": "+AI = AI đã hỗ trợ. Tôi chịu trách nhiệm.",
      "description": "+AI có nghĩa là trí tuệ nhân tạo đã hỗ trợ đáng kể cho tác phẩm và một cá nhân hoặc tổ chức được nêu tên chấp nhận trách nhiệm đối với tác phẩm đó.",
      "skip": "Chuyển đến phần giải thích",
      "language": "Ngôn ngữ",
      "languageAria": "Chọn ngôn ngữ",
      "theme": "Chế độ tối",
      "themeDark": "Chế độ tối",
      "themeLight": "Chế độ sáng",
      "themeDarkAria": "Sử dụng chế độ tối",
      "themeLightAria": "Sử dụng chế độ sáng",
      "highlight": "Màu nhấn",
      "highlightAria": "Chọn ngẫu nhiên một màu nhấn",
      "followedLink": "Mô tả hậu danh +AI",
      "heroTitle": "AI đã hỗ trợ. Tôi chịu trách nhiệm.",
      "heroLead": "Cá nhân hoặc tổ chức có tên đi kèm liên kết này đang đưa ra một tuyên bố đơn giản: <strong>trí tuệ nhân tạo đã hỗ trợ đáng kể cho tác phẩm, và bên đó chấp nhận trách nhiệm về việc công bố tác phẩm.</strong>",
      "readSpec": "Đọc đặc tả",
      "meansHeading": "Dấu hiệu này nói gì",
      "meaningOneTitle": "AI đã tham gia",
      "meaningOneBody": "AI đã hỗ trợ đáng kể trong việc tạo, phân tích, chuyển đổi hoặc trình bày tác phẩm.",
      "meaningTwoTitle": "Con người đã lựa chọn",
      "meaningTwoBody": "Một cá nhân hoặc tổ chức đã chấp nhận và công bố kết quả một cách có ý thức.",
      "meaningThreeTitle": "Trách nhiệm vẫn thuộc về con người",
      "meaningThreeBody": "Bên được nêu tên không chuyển trách nhiệm giải trình cho một hệ thống AI hoặc nhà cung cấp AI.",
      "plainTitle": "Hỗ trợ minh bạch. Trách nhiệm giải trình rõ ràng.",
      "plainLead": "Dấu hiệu này là một tuyên bố về trách nhiệm giải trình, không phải tuyên bố rằng AI là tác giả và cũng không đảm bảo rằng tác phẩm là chính xác.",
      "plainBody": "Nó không nói bao nhiêu phần của tác phẩm đến từ AI. Nó cho biết AI đã ảnh hưởng đáng kể đến kết quả và một cá nhân hoặc tổ chức có thể xác định được đứng sau quyết định sử dụng AI đó.",
      "plainQuote": "Ba ký tự làm rõ cả sự tham gia lẫn trách nhiệm.",
      "fullDocument": "Tài liệu đầy đủ",
      "specification": "Đặc tả",
      "statusLabel": "Trạng thái",
      "statusValue": "Bản nháp",
      "versionLabel": "Phiên bản",
      "markLabel": "Dấu chuẩn",
      "contents": "Nội dung",
      "footerLine": "Ký hiệu mở. Trách nhiệm của con người.",
      "versionFooter": "Đặc tả v0.1",
      "translationNote": "Bản dịch này chỉ nhằm mục đích cung cấp thông tin. Nếu có bất kỳ khác biệt nào, văn bản tiếng Anh gốc là tài liệu quy chuẩn.",
      "colourChanged": "Màu nhấn đã được đổi thành {colour}."
    },
    untranslatedNotice: {
      "badge": "Chưa dịch",
      "headline": "Đặc tả bên dưới được hiển thị bằng tiếng Anh.",
      "detail": "Ngôn ngữ này chưa được dịch. Văn bản tiếng Anh là phiên bản quy chuẩn trong mọi trường hợp."
    },
    endonym: "Tiếng Việt",
    sections: [
      {
        number: "1",
        title: "Mục đích",
        body: `
            <p>Ký hiệu <code>+AI</code> cung cấp một phương thức ngắn gọn để xác định rằng một sản phẩm đã được trí tuệ nhân tạo hỗ trợ một cách đáng kể, đồng thời xác định cá nhân hoặc tổ chức chịu trách nhiệm về sản phẩm tạo thành.</p>
            <p>Biểu thức chuẩn tắc là:</p>
            <p class="canonical"><code>&lt;Bên chịu trách nhiệm&gt; +AI</code></p>
            <p>Ví dụ:</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p>Ý nghĩa cơ bản là:</p>
            <p class="canonical">AI đã hỗ trợ. Tôi chịu trách nhiệm.</p>`
      },
      {
        number: "2",
        title: "Nguyên tắc thiết kế",
        body: `
            <p><code>+AI</code> không nhằm xác định một sản phẩm là “do con người tạo ra” hay “do AI tạo ra”.</p>
            <p>Trong quá trình hình thành, các sản phẩm hiện đại có thể được chuyển qua lại nhiều lần giữa con người và các hệ thống trí tuệ nhân tạo.</p>
            <p>Thay vào đó, <code>+AI</code> truyền đạt hai sự kiện:</p>
            <ol>
              <li>trí tuệ nhân tạo đã hỗ trợ một cách đáng kể cho công việc; và</li>
              <li>một cá nhân hoặc tổ chức có thể xác định được chịu trách nhiệm về sản phẩm tạo thành.</li>
            </ol>
            <p>Do đó, tiêu chuẩn này liên quan đến <strong>sự tham gia của AI và trách nhiệm giải trình của con người</strong>, chứ không phải quyền tác giả độc quyền.</p>`
      },
      {
        number: "3",
        title: "Thuật ngữ quy phạm",
        body: `
            <p>Các thuật ngữ <strong>PHẢI (MUST)</strong>, <strong>KHÔNG ĐƯỢC (MUST NOT)</strong>, <strong>NÊN (SHOULD)</strong>, <strong>KHÔNG NÊN (SHOULD NOT)</strong> và <strong>CÓ THỂ (MAY)</strong> là các yêu cầu quy phạm trong Đặc tả này.</p>
            <p><strong>PHẢI</strong> biểu thị một yêu cầu tuyệt đối.</p>
            <p><strong>KHÔNG ĐƯỢC</strong> biểu thị một điều cấm tuyệt đối.</p>
            <p><strong>NÊN</strong> biểu thị một khuyến nghị mạnh, có thể không tuân theo khi tồn tại lý do chính đáng.</p>
            <p><strong>KHÔNG NÊN</strong> biểu thị một thực hành thông thường cần tránh, nhưng có thể được biện minh trong những hoàn cảnh cụ thể.</p>
            <p><strong>CÓ THỂ</strong> biểu thị một thực hành tùy chọn.</p>`
      },
      {
        number: "4",
        title: "Ký hiệu chuẩn tắc",
        body: `
            <p>Dấu hiệu chuẩn tắc là:</p>
            <p class="canonical"><code>+AI</code></p>
            <p>Dạng chuẩn tắc mà con người đọc được là:</p>
            <p><strong><code>&lt;Bên chịu trách nhiệm&gt; +AI</code></strong></p>
            <p>Ví dụ:</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p data-company-example><strong>JAPER Technology +AI</strong></p>
            <p>Dấu hiệu này phân biệt chữ hoa và chữ thường.</p>
            <p>Dạng chuẩn tắc PHẢI sử dụng:</p>
            <ul>
              <li>một dấu cộng <code>+</code>;</li>
              <li>ngay sau đó là các chữ Latin in hoa <code>AI</code>;</li>
              <li>không có khoảng trắng bên trong.</li>
            </ul>
            <p>Do đó <code>+AI</code> là dạng chuẩn tắc.</p>
            <p>Những dạng sau đây không phải là dạng tương đương chuẩn tắc:</p>
            <p><code>+Ai</code> &nbsp; <code>+aI</code> &nbsp; <code>+ ai</code> &nbsp; <code>AI+</code> &nbsp; <code>AI assisted</code></p>
            <p>Các biến thể CÓ THỂ được định nghĩa về sau bằng các phần mở rộng của Đặc tả này, nhưng KHÔNG ĐƯỢC mặc định rằng chúng mang ý nghĩa chuẩn tắc của <code>+AI</code> trừ khi được định nghĩa một cách minh thị.</p>`
      },
      {
        number: "5",
        title: "Ý nghĩa của dấu hiệu",
        body: `
            <p>Bên chịu trách nhiệm khi sử dụng <code>+AI</code> tuyên bố rằng:</p>
            <h4>5.1 Sự tham gia của AI</h4>
            <p>Trí tuệ nhân tạo đã hỗ trợ một cách đáng kể trong việc tạo lập, phân tích, chuyển đổi, sinh ra, đánh giá, cấu trúc hóa hoặc trình bày sản phẩm liên quan.</p>
            <h4>5.2 Sự biết rõ</h4>
            <p>Bên chịu trách nhiệm biết hoặc có cơ sở hợp lý để tin rằng đã có sự hỗ trợ đáng kể của AI.</p>
            <h4>5.3 Thẩm quyền</h4>
            <p>Bên chịu trách nhiệm đã cho phép, khởi xướng, chỉ đạo hoặc chấp nhận một cách có ý thức việc sử dụng trí tuệ nhân tạo có liên quan.</p>
            <h4>5.4 Sự kiểm soát của con người hoặc tổ chức</h4>
            <p>Bên chịu trách nhiệm đã giữ quyền quyết định việc sản phẩm có được công bố, truyền tải, triển khai, đệ trình, trình bày hay phát hành theo cách khác hay không.</p>
            <h4>5.5 Sự chấp nhận</h4>
            <p>Bên chịu trách nhiệm chấp nhận sản phẩm ở dạng mà nó đang được trình bày.</p>
            <h4>5.6 Trách nhiệm</h4>
            <p>Bên chịu trách nhiệm nhận trách nhiệm về quyết định phát hành, sử dụng hoặc trình bày sản phẩm.</p>
            <p>Các yếu tố này cùng nhau hợp thành tuyên bố <code>+AI</code>.</p>`
      },
      {
        number: "6",
        title: "Sự hỗ trợ đáng kể",
        body: `
            <p>Dấu hiệu NÊN được sử dụng khi sự tham gia của AI đã ảnh hưởng một cách đáng kể đến sản phẩm tạo thành.</p>
            <p>Sự hỗ trợ đáng kể có thể bao gồm sự đóng góp của AI vào:</p>
            <ul>
              <li>việc viết;</li><li>việc lập luận;</li><li>việc phân tích;</li><li>các khuyến nghị;</li>
              <li>việc tổng hợp nghiên cứu;</li><li>mã nguồn phần mềm;</li><li>việc diễn giải dữ liệu;</li>
              <li>thiết kế;</li><li>hình ảnh;</li><li>âm thanh;</li><li>video;</li>
              <li>việc dịch thuật khi có sự diễn giải mang tính thực chất;</li><li>việc lập kế hoạch;</li>
              <li>việc hỗ trợ ra quyết định;</li><li>công việc toán học hoặc kỹ thuật;</li>
              <li>việc biên tập làm thay đổi ý nghĩa một cách đáng kể;</li>
              <li>hoặc công việc trí tuệ hay sáng tạo mang tính thực chất khác.</li>
            </ul>
            <p>Chức năng AI mang tính phụ trợ hoặc thuần túy máy móc không nhất thiết đòi hỏi <code>+AI</code>.</p>
            <p>Ví dụ có thể bao gồm việc tự động sửa lỗi chính tả, chức năng gợi ý hoàn thành cơ bản, việc định dạng thông thường hoặc các tính năng khác không ảnh hưởng đáng kể đến nội dung thực chất của sản phẩm.</p>
            <p>Câu hỏi quyết định không phải là tỷ lệ phần trăm nội dung do AI tạo ra.</p>
            <p>Câu hỏi quyết định là:</p>
            <blockquote><strong>AI có ảnh hưởng một cách đáng kể đến sản phẩm đang được trình bày hay không?</strong></blockquote>`
      },
      {
        number: "7",
        title: "Trách nhiệm",
        body: `
            <p>Trách nhiệm là thuộc tính định danh của <code>+AI</code>.</p>
            <p>Khi sử dụng dấu hiệu này, bên chịu trách nhiệm không chuyển giao trách nhiệm cho một hệ thống, mô hình, nhà cung cấp, tác nhân hoặc công cụ trí tuệ nhân tạo nào.</p>
            <p>Một phát biểu tương đương với:</p>
            <blockquote>“AI đã tạo ra nó, do đó tôi không chịu trách nhiệm về nó.”</blockquote>
            <p>là không tương hợp với ý nghĩa dự kiến của <code>+AI</code>.</p>
            <p>Bên chịu trách nhiệm CÓ THỂ dựa vào sự hỗ trợ của AI ở mức độ rất lớn.</p>
            <p>Bên chịu trách nhiệm CÓ THỂ công bố nội dung được AI tạo ra một cách đáng kể.</p>
            <p>Bên chịu trách nhiệm CÓ THỂ chấp nhận những đề xuất mà bản thân họ không thể tự tạo ra một cách độc lập.</p>
            <p>Không điều kiện nào trong số đó ngăn cản việc sử dụng <code>+AI</code>, với điều kiện bên chịu trách nhiệm chấp nhận sản phẩm tạo thành một cách có ý thức và nhận trách nhiệm về việc phát hành sản phẩm đó.</p>`
      },
      {
        number: "8",
        title: "Những điều +AI không có nghĩa",
        body: `
            <p>Trừ khi có một tuyên bố bổ sung quy định minh thị khác đi, <code>+AI</code> KHÔNG khẳng định rằng:</p>
            <ul>
              <li>sản phẩm không có sai sót;</li>
              <li>mọi phát biểu về sự kiện đều đã được kiểm chứng độc lập;</li>
              <li>mọi trích dẫn đều đã được đối chiếu độc lập;</li>
              <li>sản phẩm đáp ứng một tiêu chuẩn nghề nghiệp cụ thể nào đó;</li>
              <li>sản phẩm đúng đắn về mặt pháp lý;</li>
              <li>sản phẩm đúng đắn về mặt y khoa;</li>
              <li>sản phẩm an toàn cho một mục đích cụ thể nào đó;</li>
              <li>sản phẩm không chứa hiện tượng ảo giác của AI;</li>
              <li>bên chịu trách nhiệm đã tự mình viết ra từng thành phần;</li>
              <li>AI đã tạo ra phần lớn sản phẩm;</li>
              <li>AI chỉ tạo ra một phần nhỏ sản phẩm;</li>
              <li>sản phẩm là nguyên gốc;</li>
              <li>không có tài sản trí tuệ của bên thứ ba trong sản phẩm;</li>
              <li>thông tin bảo mật đã không được cung cấp cho một hệ thống AI;</li>
              <li>một nhà cung cấp, mô hình hoặc hệ thống AI cụ thể đã được sử dụng;</li>
              <li>bên chịu trách nhiệm đồng ý với mọi kết quả trung gian do AI đưa ra;</li>
              <li>hoặc bên chịu trách nhiệm có thể tái lập hoặc giải thích lập luận nội tại của hệ thống AI.</li>
            </ul>
            <p><code>+AI</code> là một <strong>tuyên bố về trách nhiệm giải trình</strong>, không phải là một bảo đảm về tính đúng đắn.</p>`
      },
      {
        number: "9",
        title: "Sự soát xét của con người",
        body: `
            <p>Phiên bản 0.1 không yêu cầu mọi thành phần của một sản phẩm phải được soát xét thủ công theo từng từ hoặc từng phần tử.</p>
            <p>Tuy nhiên, bên chịu trách nhiệm PHẢI chấp nhận một cách có ý thức sản phẩm đang được phát hành.</p>
            <p>Việc chuyển tiếp một cách mù quáng hoặc tự động các kết quả AI chưa được soát xét KHÔNG NÊN được biểu thị bằng <code>+AI</code> khi không có hành vi chấp nhận thực chất nào của con người.</p>
            <p>Các phiên bản tương lai của Đặc tả này CÓ THỂ định nghĩa những dấu hiệu bảo đảm mạnh hơn, biểu thị việc soát xét toàn bộ hoặc việc kiểm chứng độc lập.</p>`
      },
      {
        number: "10",
        title: "Cá nhân",
        body: `
            <p>Một cá nhân CÓ THỂ đặt ký hiệu này sau tên của mình.</p>
            <p>Ví dụ:</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p>Điều này có nghĩa là:</p>
            <blockquote>Trí tuệ nhân tạo đã hỗ trợ một cách đáng kể cho công việc liên quan, và Eric Mourant nhận trách nhiệm về việc phát hành công việc đó.</blockquote>
            <p>Dấu hiệu này gắn với sản phẩm hoặc thông tin liên lạc có liên quan.</p>
            <p>Nó không nhất thiết có nghĩa là mọi hoạt động do cá nhân đó thực hiện đều sử dụng trí tuệ nhân tạo.</p>`
      },
      {
        number: "11",
        title: "Tổ chức",
        body: `
            <p>Một tổ chức CÓ THỂ sử dụng <code>+AI</code>.</p>
            <p data-company-example>Ví dụ:</p>
            <p data-company-example><strong>JAPER Technology +AI</strong></p>
            <p>Điều này có nghĩa là tổ chức đó nhận trách nhiệm về sản phẩm có sự hỗ trợ của AI liên quan, phù hợp với cơ cấu quản trị và thẩm quyền áp dụng của mình.</p>
            <p>Khi hữu ích, CÓ THỂ nêu tên cả tổ chức và cá nhân chịu trách nhiệm.</p>
            <p data-company-example>Ví dụ:</p>
            <p data-company-example><strong>JAPER Technology<br>Eric Mourant +AI</strong></p>`
      },
      {
        number: "12",
        title: "Thư điện tử và tin nhắn",
        body: `
            <p>Trong liên lạc cá nhân, cách trình bày được ưu tiên là:</p>
            <p><strong>Trân trọng,<br>Eric Mourant +AI</strong></p>
            <p>Dấu hiệu CÓ THỂ được liên kết tới một phần giải thích chuẩn tắc về ý nghĩa của nó.</p>
            <p>Một liên kết KHÔNG ĐƯỢC làm thay đổi ký hiệu hiển thị.</p>
            <p>Văn bản thuần PHẢI luôn đủ để biểu đạt tuyên bố này.</p>`
      },
      {
        number: "13",
        title: "Tài liệu",
        body: `
            <p>Ký hiệu CÓ THỂ xuất hiện ở trường tác giả, người soạn thảo, người soát xét hoặc bên chịu trách nhiệm.</p>
            <p>Ví dụ:</p>
            <p><strong>Tác giả: Eric Mourant +AI</strong></p>
            <p><strong>Người soạn thảo: Eric Mourant +AI</strong></p>
            <p data-company-example><strong>Đơn vị ban hành: JAPER Technology +AI</strong></p>
            <p>Vị trí đặt ký hiệu NÊN làm rõ cá nhân hoặc tổ chức nào đang nhận trách nhiệm.</p>`
      },
      {
        number: "14",
        title: "Phần mềm",
        body: `
            <p>Ký hiệu CÓ THỂ được sử dụng trong các kho mã nguồn, các lần đưa mã, phần đầu của mã nguồn, tài liệu kỹ thuật, ghi chú phát hành và các sản phẩm được sinh ra.</p>
            <p>Ví dụ:</p>
            <pre><code>Author: Eric Mourant +AI</code></pre>
            <p>Một dự án CÓ THỂ tuyên bố thêm:</p>
            <pre><code>This project uses +AI.</code></pre>
            <p>Tuyên bố ở cấp độ dự án như vậy NÊN nêu tên cá nhân hoặc tổ chức chịu trách nhiệm khi khả thi.</p>`
      },
      {
        number: "15",
        title: "Sản phẩm sáng tạo",
        body: `
            <p>Ký hiệu CÓ THỂ đi kèm hình ảnh, âm thanh, video, thiết kế, tranh minh họa, bài trình bày và các tác phẩm sáng tạo khác.</p>
            <p>Ví dụ:</p>
            <p><strong>Thực hiện bởi Eric Mourant +AI</strong></p>
            <p>Bản thân dấu hiệu này không xác định những thành phần nào đã được AI tạo ra hoặc chỉnh sửa.</p>
            <p>Siêu dữ liệu về nguồn gốc chi tiết hơn CÓ THỂ được gắn kèm một cách riêng biệt.</p>`
      },
      {
        number: "16",
        title: "Công tác nghiên cứu và kỹ thuật",
        body: `
            <p>Dấu hiệu CÓ THỂ được sử dụng trong công tác nghiên cứu, khoa học, thiết kế kỹ thuật hoặc kỹ thuật, khi được các yêu cầu áp dụng của cơ sở, của cơ quan công bố hoặc của tổ chức nghề nghiệp cho phép.</p>
            <p>KHÔNG ĐƯỢC trình bày <code>+AI</code> như là sự thay thế cho bất kỳ nội dung công khai cụ thể hơn nào do một cơ quan công bố, cơ quan quản lý, người sử dụng lao động, tổ chức nghề nghiệp hoặc pháp luật yêu cầu.</p>
            <p>Ký hiệu CÓ THỂ bổ trợ cho nội dung công khai đó.</p>`
      },
      {
        number: "17",
        title: "Biểu diễn máy đọc được",
        body: `
            <p>Các hệ thống CÓ THỂ biểu diễn tuyên bố này bằng siêu dữ liệu có cấu trúc.</p>
            <p>Một biểu diễn tối giản là:</p>
            <pre><code>{
  "provenance": "+AI"
}</code></pre>
            <p>Một biểu diễn đầy đủ hơn là:</p>
            <pre data-json-example><code>{
  "ai_assistance": {
    "material": true,
    "responsibility": "human",
    "responsible_party": "Eric Mourant",
    "notation": "+AI"
  }
}</code></pre>
            <p>Các dạng máy đọc được NÊN giữ nguyên ý nghĩa ngữ nghĩa như ký hiệu hiển thị.</p>`
      },
      {
        number: "18",
        title: "Sự duy trì",
        body: `
            <p>Ký hiệu <code>+AI</code> NÊN được giữ lại qua những phép biến đổi hợp lý của một sản phẩm khi thông tin ghi công được bảo toàn.</p>
            <p>Ví dụ bao gồm việc chuyển đổi giữa các định dạng tài liệu, việc lưu trữ, in ấn, kết xuất, tái công bố và truyền tải.</p>
            <p>Khi siêu dữ liệu bị loại bỏ, dấu hiệu hiển thị dưới dạng văn bản thuần NÊN vẫn đủ để truyền đạt tuyên bố này.</p>`
      },
      {
        number: "19",
        title: "Sử dụng mở",
        body: `
            <p>Ký hiệu <code>+AI</code> được dự định dành cho việc sử dụng công cộng không hạn chế.</p>
            <p>Việc sử dụng ký hiệu này KHÔNG NÊN đòi hỏi:</p>
            <ul>
              <li>đăng ký;</li><li>tư cách thành viên;</li><li>chi trả;</li><li>chứng nhận;</li>
              <li>phê duyệt;</li><li>hoặc việc sử dụng một sản phẩm hay nhà cung cấp AI cụ thể nào.</li>
            </ul>
            <p>Tính hữu dụng của ký hiệu này phụ thuộc vào khả năng vận hành như một quy ước phổ quát.</p>`
      },
      {
        number: "20",
        title: "Tính trung lập",
        body: `
            <p><code>+AI</code> không biểu thị sự tán thành hay không tán thành đối với trí tuệ nhân tạo.</p>
            <p>Nó không cho biết việc sử dụng AI là cần thiết, đáng mong muốn hay ưu việt hơn so với công việc do con người thực hiện mà không có trợ giúp.</p>
            <p>Nó chỉ ghi nhận sự tham gia đáng kể của AI và trách nhiệm giải trình của con người hoặc tổ chức.</p>`
      },
      {
        number: "21",
        title: "Sự trình bày sai lệch",
        body: `
            <p>Một cá nhân hoặc tổ chức KHÔNG NÊN sử dụng <code>+AI</code> khi:</p>
            <ul>
              <li>không có bên chịu trách nhiệm nào có thể xác định được;</li>
              <li>bên được nêu tên chưa chấp nhận sản phẩm;</li>
              <li>sản phẩm được phát hành một cách tự động mà không có thẩm quyền thực chất của con người;</li>
              <li>hoặc ký hiệu được dùng để tạo ra ấn tượng sai lệch về trách nhiệm giải trình của con người.</li>
            </ul>
            <p>Kết quả AI tự hành mà không có sự chấp nhận thực chất của con người nằm ngoài phạm vi chuẩn tắc của <code>+AI</code>.</p>
            <p>Các Đặc tả tương lai CÓ THỂ định nghĩa ký hiệu cho kết quả AI tự hành.</p>`
      },
      {
        number: "22",
        title: "Quan hệ với quyền tác giả",
        body: `
            <p><code>+AI</code> chủ ý không phân định tỷ lệ phần trăm quyền tác giả.</p>
            <p>Một sản phẩm CÓ THỂ chứa phần lớn nội dung có nguồn gốc từ con người mà vẫn thỏa mãn điều kiện.</p>
            <p>Một sản phẩm CÓ THỂ chứa phần lớn nội dung có nguồn gốc từ AI mà vẫn thỏa mãn điều kiện.</p>
            <p>Tiêu chí xét đến là liệu:</p>
            <p><strong>AI đã hỗ trợ một cách đáng kể, và bên được nêu tên nhận trách nhiệm về kết quả.</strong></p>`
      },
      {
        number: "23",
        title: "Giải thích công khai chuẩn tắc",
        body: `
            <p>Khi cần một lời giải thích ngắn, cách diễn đạt được ưu tiên là:</p>
            <p class="canonical">AI đã hỗ trợ. Tôi chịu trách nhiệm.</p>
            <p>Khi cần một lời giải thích dài hơn:</p>
            <blockquote><strong><code>+AI</code> có nghĩa là trí tuệ nhân tạo đã hỗ trợ một cách đáng kể cho công việc này và cá nhân hoặc tổ chức được nêu tên nhận trách nhiệm về sản phẩm tạo thành.</strong></blockquote>`
      },
      {
        number: "24",
        title: "Phép thử +AI",
        body: `
            <p>Trước khi sử dụng dấu hiệu này, một người cần có thể trả lời <strong>có</strong> cho cả hai câu hỏi:</p>
            <p><strong>AI có hỗ trợ một cách đáng kể để tạo ra sản phẩm này hay không?</strong></p>
            <p><strong>Tôi có sẵn lòng nhận trách nhiệm về việc phát hành nó hay không?</strong></p>
            <p>Nếu cả hai câu trả lời đều là có:</p>
            <p class="canonical">+AI</p>`
      },
      {
        number: "25",
        title: "Các phần mở rộng trong tương lai",
        body: `
            <p>Các phiên bản tương lai CÓ THỂ định nghĩa thêm ký hiệu đề cập đến:</p>
            <ul>
              <li>sự hỗ trợ không đáng kể của AI;</li><li>việc AI tạo ra là chủ yếu;</li><li>việc con người soát xét toàn bộ;</li>
              <li>việc kiểm chứng độc lập;</li><li>hoạt động của tác nhân tự hành;</li>
              <li>nguồn gốc được bảo đảm bằng mật mã;</li><li>việc định danh hệ thống AI;</li>
              <li>việc định danh mô hình;</li><li>hoặc chuỗi đóng góp của con người và máy.</li>
            </ul>
            <p>Các phần mở rộng như vậy NÊN giữ <code>+AI</code> làm dấu hiệu chuẩn tắc đơn giản cho:</p>
            <p class="canonical">công việc có sự hỗ trợ của AI với trách nhiệm của con người có thể xác định được.</p>`
      },
      {
        number: "26",
        title: "Tuyên bố chuẩn tắc",
        body: `
            <p>Cá nhân hoặc tổ chức sử dụng <code>+AI</code> đưa ra tuyên bố sau đây:</p>
            <blockquote><strong>Trí tuệ nhân tạo đã hỗ trợ một cách đáng kể cho công việc này. Tôi đã chọn chấp nhận, công bố, truyền tải, triển khai hoặc phát hành theo cách khác kết quả công việc tạo thành, và tôi chịu trách nhiệm về quyết định đó cũng như về công việc như đã được trình bày.</strong></blockquote>
            <p>Cách diễn đạt vắn tắt dành cho công chúng là:</p>
            <p class="canonical">AI đã hỗ trợ. Tôi chịu trách nhiệm.</p>
            <p>Dấu hiệu chuẩn tắc là:</p>
            <p class="canonical">+AI</p>`
      }
    ],
    end: "<p>Đặc tả +AI phiên bản 0.1</p><p>Nguồn gốc và trách nhiệm giải trình giữa con người và AI</p><strong>AI đã hỗ trợ. Tôi chịu trách nhiệm.</strong>"
  });
})(window.PlusAISpecTranslations);
