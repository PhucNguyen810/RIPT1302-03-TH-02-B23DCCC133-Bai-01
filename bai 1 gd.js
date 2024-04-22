var teachers = [
        {
          image: "1.jpg",
          name: "Bùi Thị Như",
          info: "Giáo viên Toán",
          department: "Khoa Toán",
          specialization: "Toán học",
        },
        {
          image: "2.jpg",
          name: "Nguyễn Thị Vân Anh",
          info: "Giáo viên Văn",
          department: "Khoa Văn",
          specialization: "Ngôn ngữ và Văn học",
        }
        
      ];
      
      function renderTeachers() {
        var html = "";
        teachers.forEach(function(teacher) {
          html += `
            <div class="teacher-card">
              <img src="${teacher.image}" alt="${teacher.name}">
              <div><strong>${teacher.name}</strong></div>
              <div>${teacher.info}</div>
              <div><em>${teacher.department}</em></div>
              <div>${teacher.specialization}</div>
              <button>Xem</button>
            </div>
          `;
        });
        document.getElementById("bottom-right").innerHTML = html;
      }
      
      function refresh() {
        renderTeachers();
      }
      
      // Gọi hàm renderTeachers() khi trang được tải
      renderTeachers();
      