package com.bbtutorials.users;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import java.util.logging.Logger;
@Slf4j
@Controller
@RequiredArgsConstructor
public class AppController {
	@RequestMapping({"/"})
	public String loadUI() {
		Logger.getLogger("loading UIssdd");
		return "forward:/index.html";
	}

}
